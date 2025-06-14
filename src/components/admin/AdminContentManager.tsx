
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2, Eye } from "lucide-react";
import { useJobs } from "@/contexts/JobsContext";
import { useBlogs } from "@/contexts/BlogsContext";
import { useStudyMaterials } from "@/contexts/StudyMaterialsContext";
import { toast } from "sonner";

type ContentType = 'jobs' | 'blogs' | 'materials';

const AdminContentManager = () => {
  const [activeTab, setActiveTab] = useState<ContentType>('jobs');
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{ id: number; type: ContentType; title: string } | null>(null);

  const { jobs, deleteJob } = useJobs();
  const { blogs, deleteBlog } = useBlogs();
  const { studyMaterials, deleteStudyMaterial } = useStudyMaterials();

  const handleDeleteClick = (id: number, type: ContentType, title: string) => {
    setItemToDelete({ id, type, title });
    setDeleteConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    if (!itemToDelete) return;

    switch (itemToDelete.type) {
      case 'jobs':
        deleteJob(itemToDelete.id);
        toast.success("Job deleted successfully");
        break;
      case 'blogs':
        deleteBlog(itemToDelete.id);
        toast.success("Blog deleted successfully");
        break;
      case 'materials':
        deleteStudyMaterial(itemToDelete.id);
        toast.success("Study material deleted successfully");
        break;
    }

    setDeleteConfirmOpen(false);
    setItemToDelete(null);
  };

  const renderJobsTable = () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Posted</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jobs.map((job) => (
          <TableRow key={job.id}>
            <TableCell className="font-medium">{job.title}</TableCell>
            <TableCell>{job.company}</TableCell>
            <TableCell>{job.location}</TableCell>
            <TableCell>
              <Badge variant="outline">{job.type}</Badge>
            </TableCell>
            <TableCell>{job.postedDate}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={() => handleDeleteClick(job.id, 'jobs', job.title)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  const renderBlogsTable = () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {blogs.map((blog) => (
          <TableRow key={blog.id}>
            <TableCell className="font-medium">{blog.title}</TableCell>
            <TableCell>
              <Badge variant="outline">{blog.category}</Badge>
            </TableCell>
            <TableCell>{blog.date}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={() => handleDeleteClick(blog.id, 'blogs', blog.title)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  const renderMaterialsTable = () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Premium</TableHead>
          <TableHead>Downloads</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {studyMaterials.map((material) => (
          <TableRow key={material.id}>
            <TableCell className="font-medium">{material.title}</TableCell>
            <TableCell>
              <Badge variant="outline">{material.category}</Badge>
            </TableCell>
            <TableCell>{material.type}</TableCell>
            <TableCell>
              <Badge variant={material.isPremium ? "default" : "secondary"}>
                {material.isPremium ? "Premium" : "Free"}
              </Badge>
            </TableCell>
            <TableCell>{material.downloadCount}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={() => handleDeleteClick(material.id, 'materials', material.title)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Management</CardTitle>
        <CardDescription>
          View and manage all platform content. Delete items that need to be removed.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-6">
          <Button 
            variant={activeTab === 'jobs' ? 'default' : 'outline'}
            onClick={() => setActiveTab('jobs')}
          >
            Jobs ({jobs.length})
          </Button>
          <Button 
            variant={activeTab === 'blogs' ? 'default' : 'outline'}
            onClick={() => setActiveTab('blogs')}
          >
            Blogs ({blogs.length})
          </Button>
          <Button 
            variant={activeTab === 'materials' ? 'default' : 'outline'}
            onClick={() => setActiveTab('materials')}
          >
            Study Materials ({studyMaterials.length})
          </Button>
        </div>

        <div className="min-h-[400px]">
          {activeTab === 'jobs' && renderJobsTable()}
          {activeTab === 'blogs' && renderBlogsTable()}
          {activeTab === 'materials' && renderMaterialsTable()}
        </div>

        <Dialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete "{itemToDelete?.title}"? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDeleteConfirmOpen(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleConfirmDelete}>
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default AdminContentManager;
