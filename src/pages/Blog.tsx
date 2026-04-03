import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS } from "@/lib/blog-data";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const Blog = () => {
  const published = BLOG_POSTS.filter((p) => p.status === "published");

  return (
    <Layout>
      <SEO
        title="Blog — Digital Marketing Insights"
        description="Expert digital marketing insights, strategies, and tips from MPG Solution LLC. Learn about Facebook ads, Instagram marketing, lead generation, and more."
        path="/blog"
      />

      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-br from-primary/5 via-transparent to-accent/30">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-20 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Marketing <span className="text-primary">Insights</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Expert strategies, practical tips, and industry perspectives to help your business grow through smarter digital marketing.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {published.map((post) => (
              <Card key={post.id} className="group overflow-hidden border-border transition-all hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5">
                <div className="aspect-[16/9] overflow-hidden bg-accent">
                  <img
                    src={`/blog/${post.slug}.jpg`}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="rounded-full bg-accent px-2.5 py-0.5 font-medium text-accent-foreground">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="mb-2 text-lg font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Read More <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-primary">
        <div className="container mx-auto px-4 py-16 text-center lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
            Need Help With Your Marketing?
          </h2>
          <p className="mb-8 mx-auto max-w-xl text-primary-foreground/80">
            Our team is ready to help you build campaigns that deliver real results.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get a Free Consultation <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
