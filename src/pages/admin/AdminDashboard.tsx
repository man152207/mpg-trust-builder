import { useEffect } from "react";
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { isAdminAuthenticated, logoutAdmin } from "./AdminLogin";
import { CMSProvider, useCMS } from "@/lib/cms-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  LayoutDashboard, FileText, Settings, MessageSquare, LogOut, Eye, EyeOff,
  HelpCircle, ChevronLeft
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

// Admin shell
const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      navigate("/admin");
    }
  }, [navigate]);

  if (!isAdminAuthenticated()) return null;

  return (
    <CMSProvider>
      <div className="flex min-h-screen bg-background">
        <AdminSidebar />
        <div className="flex-1 overflow-auto">
          <AdminHeader />
          <div className="p-6">
            <Routes>
              <Route index element={<DashboardOverview />} />
              <Route path="pages" element={<PagesManager />} />
              <Route path="submissions" element={<SubmissionsViewer />} />
              <Route path="faqs" element={<FAQManager />} />
              <Route path="settings" element={<SettingsPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </CMSProvider>
  );
};

const AdminSidebar = () => {
  const { pathname } = useLocation();
  const base = "/admin/dashboard";
  const links = [
    { to: base, label: "Dashboard", icon: LayoutDashboard },
    { to: `${base}/pages`, label: "Pages", icon: FileText },
    { to: `${base}/submissions`, label: "Submissions", icon: MessageSquare },
    { to: `${base}/faqs`, label: "FAQs", icon: HelpCircle },
    { to: `${base}/settings`, label: "Settings", icon: Settings },
  ];

  return (
    <aside className="hidden w-56 shrink-0 border-r border-border bg-card lg:block">
      <div className="flex h-14 items-center border-b border-border px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded bg-primary">
            <span className="text-xs font-bold text-primary-foreground">M</span>
          </div>
          <span className="text-sm font-bold">Admin</span>
        </Link>
      </div>
      <nav className="space-y-1 p-3">
        {links.map((link) => {
          const active = pathname === link.to || (link.to !== base && pathname.startsWith(link.to));
          return (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
                active ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted"
              )}
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

const AdminHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="flex h-14 items-center justify-between border-b border-border px-6">
      <Link to="/" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ChevronLeft className="h-4 w-4" /> View Site
      </Link>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => { logoutAdmin(); navigate("/admin"); }}
      >
        <LogOut className="mr-1 h-4 w-4" /> Logout
      </Button>
    </header>
  );
};

// Dashboard Overview
const DashboardOverview = () => {
  const { state } = useCMS();
  const published = Object.values(state.pages).filter((p) => p.status === "published").length;
  const drafts = Object.values(state.pages).filter((p) => p.status === "draft").length;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-4">
        <Card><CardContent className="p-4"><p className="text-2xl font-bold text-primary">{Object.keys(state.pages).length}</p><p className="text-xs text-muted-foreground">Total Pages</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-2xl font-bold text-green-600">{published}</p><p className="text-xs text-muted-foreground">Published</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-2xl font-bold text-yellow-600">{drafts}</p><p className="text-xs text-muted-foreground">Drafts</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-2xl font-bold text-primary">{state.submissions.length}</p><p className="text-xs text-muted-foreground">Submissions</p></CardContent></Card>
      </div>

      <Card>
        <CardHeader><CardTitle className="text-lg">Recent Submissions</CardTitle></CardHeader>
        <CardContent>
          {state.submissions.length === 0 ? (
            <p className="text-sm text-muted-foreground">No submissions yet.</p>
          ) : (
            <div className="space-y-3">
              {state.submissions.slice(0, 5).map((sub) => (
                <div key={sub.id} className="flex items-center justify-between rounded border border-border p-3 text-sm">
                  <div>
                    <p className="font-medium">{sub.name}</p>
                    <p className="text-xs text-muted-foreground">{sub.email} · {sub.service}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{sub.date}</span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

// Pages Manager
const PagesManager = () => {
  const { state, togglePageStatus, updatePage } = useCMS();
  const { toast } = useToast();
  const [editingPage, setEditingPage] = useState<string | null>(null);
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDesc, setMetaDesc] = useState("");

  const startEdit = (key: string) => {
    setEditingPage(key);
    setMetaTitle(state.pages[key].metaTitle);
    setMetaDesc(state.pages[key].metaDescription);
  };

  const saveEdit = () => {
    if (editingPage) {
      updatePage(editingPage, { metaTitle, metaDescription: metaDesc });
      toast({ title: "Page metadata saved" });
      setEditingPage(null);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Pages</h1>
      <div className="space-y-3">
        {Object.entries(state.pages).map(([key, page]) => (
          <Card key={key}>
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium capitalize">{key.replace("-", " ")}</span>
                  <Badge variant={page.status === "published" ? "default" : "secondary"}>
                    {page.status}
                  </Badge>
                </div>
                {editingPage === key ? (
                  <div className="mt-3 space-y-2">
                    <Input value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} placeholder="Meta title" />
                    <Input value={metaDesc} onChange={(e) => setMetaDesc(e.target.value)} placeholder="Meta description" />
                    <div className="flex gap-2">
                      <Button size="sm" onClick={saveEdit}>Save</Button>
                      <Button size="sm" variant="ghost" onClick={() => setEditingPage(null)}>Cancel</Button>
                    </div>
                  </div>
                ) : (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {page.slug} · Last edited: {new Date(page.lastEdited).toLocaleDateString()}
                  </p>
                )}
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost" onClick={() => startEdit(key)}>
                  <Settings className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" onClick={() => { togglePageStatus(key); toast({ title: `Page ${page.status === "published" ? "unpublished" : "published"}` }); }}>
                  {page.status === "published" ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Submissions
const SubmissionsViewer = () => {
  const { state } = useCMS();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Form Submissions</h1>
      {state.submissions.length === 0 ? (
        <p className="text-muted-foreground">No submissions received yet.</p>
      ) : (
        <div className="space-y-4">
          {state.submissions.map((sub) => (
            <Card key={sub.id}>
              <CardContent className="p-4">
                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold">{sub.name}</h3>
                  <span className="text-xs text-muted-foreground">{sub.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">{sub.email} · {sub.company}</p>
                <Badge variant="outline" className="mt-1 mb-2">{sub.service}</Badge>
                <p className="text-sm text-muted-foreground">{sub.message}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

// FAQ Manager
const FAQManager = () => {
  const { state, updateFaqs } = useCMS();
  const { toast } = useToast();
  const [faqs, setFaqs] = useState(state.faqs);
  const [newQ, setNewQ] = useState("");
  const [newA, setNewA] = useState("");

  const addFaq = () => {
    if (!newQ.trim() || !newA.trim()) return;
    const updated = [...faqs, { question: newQ, answer: newA }];
    setFaqs(updated);
    updateFaqs(updated);
    setNewQ("");
    setNewA("");
    toast({ title: "FAQ added" });
  };

  const removeFaq = (i: number) => {
    const updated = faqs.filter((_, idx) => idx !== i);
    setFaqs(updated);
    updateFaqs(updated);
    toast({ title: "FAQ removed" });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">FAQ Manager</h1>

      <Card>
        <CardHeader><CardTitle className="text-lg">Add New FAQ</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <Input value={newQ} onChange={(e) => setNewQ(e.target.value)} placeholder="Question" />
          <Textarea value={newA} onChange={(e) => setNewA(e.target.value)} placeholder="Answer" rows={3} />
          <Button onClick={addFaq}>Add FAQ</Button>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <Card key={i}>
            <CardContent className="flex items-start justify-between p-4">
              <div className="flex-1">
                <p className="font-medium text-sm">{faq.question}</p>
                <p className="text-xs text-muted-foreground mt-1">{faq.answer.slice(0, 120)}...</p>
              </div>
              <Button size="sm" variant="destructive" onClick={() => removeFaq(i)}>Remove</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Settings
const SettingsPage = () => {
  const { state, updateContactInfo } = useCMS();
  const { toast } = useToast();
  const [email, setEmail] = useState(state.contactInfo.email);
  const [address, setAddress] = useState(state.contactInfo.address);
  const [website, setWebsite] = useState(state.contactInfo.website);

  const handleSave = () => {
    updateContactInfo({ email, address, website });
    toast({ title: "Settings saved" });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>
      <Card>
        <CardHeader><CardTitle className="text-lg">Contact Information</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Address</label>
            <Input value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Website</label>
            <Input value={website} onChange={(e) => setWebsite(e.target.value)} />
          </div>
          <Button onClick={handleSave}>Save Settings</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
