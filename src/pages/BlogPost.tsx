import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BLOG_POSTS } from "@/lib/blog-data";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { COMPANY } from "@/lib/content";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <SEO title="Post Not Found" description="The blog post you're looking for doesn't exist." path="/blog" />
        <div className="container mx-auto px-4 py-24 text-center lg:px-8">
          <h1 className="mb-4 text-3xl font-bold text-foreground">Post Not Found</h1>
          <p className="mb-8 text-muted-foreground">The article you're looking for doesn't exist or has been removed.</p>
          <Button asChild><Link to="/blog">Back to Blog</Link></Button>
        </div>
      </Layout>
    );
  }

  const related = BLOG_POSTS.filter((p) => p.id !== post.id && p.status === "published").slice(0, 3);

  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("### ")) {
        return <h3 key={i} className="mt-8 mb-3 text-xl font-semibold text-foreground">{line.replace("### ", "")}</h3>;
      }
      if (line.startsWith("## ")) {
        return <h2 key={i} className="mt-10 mb-4 text-2xl font-bold text-foreground">{line.replace("## ", "")}</h2>;
      }
      if (line.startsWith("- **")) {
        const match = line.match(/^- \*\*(.+?)\*\* — (.+)$/);
        if (match) {
          return <li key={i} className="mb-2 text-muted-foreground"><strong className="text-foreground">{match[1]}</strong> — {match[2]}</li>;
        }
        const match2 = line.match(/^- \*\*(.+?)\*\*(.*)$/);
        if (match2) {
          return <li key={i} className="mb-2 text-muted-foreground"><strong className="text-foreground">{match2[1]}</strong>{match2[2]}</li>;
        }
      }
      if (line.startsWith("- ")) {
        return <li key={i} className="mb-2 text-muted-foreground">{line.replace("- ", "")}</li>;
      }
      if (/^\d+\. \*\*/.test(line)) {
        const match = line.match(/^\d+\. \*\*(.+?)\*\* — (.+)$/);
        if (match) {
          return <li key={i} className="mb-2 text-muted-foreground list-decimal ml-4"><strong className="text-foreground">{match[1]}</strong> — {match[2]}</li>;
        }
        const match2 = line.match(/^\d+\. \*\*(.+?)\*\*(.*)$/);
        if (match2) {
          return <li key={i} className="mb-2 text-muted-foreground list-decimal ml-4"><strong className="text-foreground">{match2[1]}</strong>{match2[2]}</li>;
        }
      }
      if (line.trim() === "") return <div key={i} className="h-2" />;
      return <p key={i} className="mb-4 text-muted-foreground leading-relaxed">{line}</p>;
    });
  };

  return (
    <Layout>
      <SEO title={post.title} description={post.metaDescription} path={`/blog/${post.slug}`} />

      {/* Header */}
      <section className="border-b border-border bg-gradient-to-br from-primary/5 via-transparent to-accent/30">
        <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
          <Link to="/blog" className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Blog
          </Link>
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">{post.category}</span>
              <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{post.readTime}</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground md:text-4xl leading-tight">{post.title}</h1>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto -mt-1 max-w-3xl overflow-hidden rounded-b-2xl">
          <img
            src={`/blog/${post.slug}.jpg`}
            alt={post.title}
            className="w-full aspect-[2/1] object-cover"
            onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
          />
        </div>
      </div>

      {/* Content */}
      <article className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl prose-sm">
            {renderContent(post.content)}
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="border-y border-border bg-card">
        <div className="container mx-auto px-4 py-12 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-3 text-2xl font-bold text-foreground">Ready to Improve Your Marketing?</h2>
            <p className="mb-6 text-muted-foreground">
              {COMPANY.name} helps businesses grow with strategic digital marketing. Let's talk about your goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild>
                <Link to="/contact">Get a Free Consultation <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold text-foreground text-center">Related Articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((rp) => (
                <Card key={rp.id} className="group overflow-hidden border-border transition-all hover:shadow-lg hover:shadow-primary/5">
                  <div className="aspect-[16/9] overflow-hidden bg-accent">
                    <img
                      src={`/blog/${rp.slug}.jpg`}
                      alt={rp.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
                    />
                  </div>
                  <CardContent className="p-5">
                    <span className="mb-2 inline-block rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
                      {rp.category}
                    </span>
                    <h3 className="mb-2 text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                      <Link to={`/blog/${rp.slug}`}>{rp.title}</Link>
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{rp.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default BlogPost;
