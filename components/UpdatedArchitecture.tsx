import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UpdatedArchitecture() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">E-commerce Website Architecture (User & Admin)</h1>
      <Tabs defaultValue="user" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="user">User Side</TabsTrigger>
          <TabsTrigger value="admin">Admin Side</TabsTrigger>
        </TabsList>
        <TabsContent value="user">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">User-Side Architecture</CardTitle>
              <CardDescription>Frontend and backend components for the customer-facing side</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="frontend">
                  <AccordionTrigger>Frontend</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Next.js for server-side rendering and static site generation</li>
                      <li>React for building interactive UI components</li>
                      <li>TypeScript for type-safe code</li>
                      <li>Tailwind CSS for responsive design</li>
                      <li>Redux Toolkit for state management</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="backend">
                  <AccordionTrigger>Backend</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Node.js with Express.js for API development</li>
                      <li>GraphQL for efficient data fetching</li>
                      <li>MongoDB for flexible, scalable database</li>
                      <li>Redis for caching and session management</li>
                      <li>Elasticsearch for advanced search functionality</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="features">
                  <AccordionTrigger>Key Features</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Product catalog and search</li>
                      <li>User authentication and profiles</li>
                      <li>Shopping cart and checkout</li>
                      <li>Order tracking</li>
                      <li>Reviews and ratings</li>
                      <li>Wishlist functionality</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="admin">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Admin-Side Architecture</CardTitle>
              <CardDescription>Backend and dashboard components for site management</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="dashboard">
                  <AccordionTrigger>Admin Dashboard</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>React for building the admin interface</li>
                      <li>Material-UI or Ant Design for admin UI components</li>
                      <li>Redux for state management</li>
                      <li>Recharts or D3.js for data visualization</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="backend">
                  <AccordionTrigger>Backend</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Shared Node.js backend with user-side</li>
                      <li>Separate API routes for admin functionalities</li>
                      <li>Advanced permission and role management</li>
                      <li>Integration with analytics services</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="features">
                  <AccordionTrigger>Key Features</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>User management</li>
                      <li>Product and inventory management</li>
                      <li>Order processing and management</li>
                      <li>Content management system (CMS)</li>
                      <li>Analytics and reporting</li>
                      <li>Promotion and discount management</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl">Shared Infrastructure</CardTitle>
          <CardDescription>Components used by both user and admin sides</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="infrastructure">
              <AccordionTrigger>Infrastructure</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Docker for containerization</li>
                  <li>Kubernetes for orchestration and scaling</li>
                  <li>AWS or Google Cloud Platform for cloud hosting</li>
                  <li>Cloudflare for CDN and DDoS protection</li>
                  <li>Jenkins or GitLab CI for CI/CD pipelines</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="security">
              <AccordionTrigger>Security</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>OAuth 2.0 and JWT for authentication</li>
                  <li>HTTPS encryption for all communications</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Data encryption at rest and in transit</li>
                  <li>Web Application Firewall (WAF) implementation</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="integrations">
              <AccordionTrigger>Integrations</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Stripe and PayPal for payment processing</li>
                  <li>Algolia for advanced search capabilities</li>
                  <li>Sendgrid or Mailchimp for email marketing</li>
                  <li>Google Analytics for web analytics</li>
                  <li>Zendesk or Intercom for customer support</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}