
import { toast } from "sonner";
import { allMaterials } from "@/components/study-material/materialData";

export const useStudyMaterialDownload = () => {
  const handleDownload = (id: number, isPremium: boolean) => {
    // Check if user is logged in (implement this based on your auth system)
    const isLoggedIn = false;
    const hasPremiumAccess = false;
    
    if (!isLoggedIn) {
      toast.error("Please log in to download study materials", {
        action: {
          label: "Login",
          onClick: () => {
            // Redirect to login page
            window.location.href = "/login";
          }
        }
      });
      return;
    }
    
    if (isPremium && !hasPremiumAccess) {
      toast.error("This is a premium resource", {
        description: "Upgrade to access premium study materials",
        action: {
          label: "Upgrade",
          onClick: () => {
            // Redirect to upgrade page
            console.log("Redirect to upgrade page");
          }
        }
      });
      return;
    }
    
    // Create a dummy PDF download
    const dummyPdfContent = "data:application/pdf;base64,JVBERi0xLjcKJeLjz9MKMSAwIG9iago8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIFI+PgplbmRvYmoKMiAwIG9iago8PC9UeXBlL1BhZ2VzL0tpZHNbMyAwIFJdL0NvdW50IDE+PgplbmRvYmoKMyAwIG9iago8PC9UeXBlL1BhZ2UvUGFyZW50IDIgMCBSL01lZGlhQm94WzAgMCA1OTUgODQyXS9Db250ZW50cyA0IDAgUj4+CmVuZG9iago0IDAgb2JqCjw8L0ZpbHRlci9GbGF0ZURlY29kZS9MZW5ndGggNTU+PnN0cmVhbQp4nDPQM1Qo5ypUMABCM0MjICWlYKRnZGAMpIxNTECUiYEmGhkbkaeJUC1dABYVBnYKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAwMDA2NCAwMDAwMCBuIAowMDAwMDAwMTE3IDAwMDAwIG4gCjAwMDAwMDAxOTYgMDAwMDAgbiAKdHJhaWxlcgo8PC9TaXplIDUvUm9vdCAxIDAgUj4+CnN0YXJ0eHJlZgozMTkKJSVFT0YK";
    
    const material = allMaterials.find(m => m.id === id) || {title: "Study Material"};
    const link = document.createElement('a');
    link.href = dummyPdfContent;
    link.download = `${material.title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Download started", {
      description: "Your file will download shortly"
    });
  };

  return { handleDownload };
};
