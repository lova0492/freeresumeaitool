import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Pricing
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the plan that works best for you. We believe in transparency and providing value at every level.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {/* Free Plan */}
            <Card className="relative flex flex-col border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Free Plan</CardTitle>
                <CardDescription className="text-base">
                  Perfect for getting started with resume building
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/forever</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Resume examples</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Resume templates preview</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Educational content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">No account required</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="default">
                  Current Plan
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Plan (Coming Soon) */}
            <Card className="relative flex flex-col border-2 border-primary/50">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Coming Soon
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Pro Plan</CardTitle>
                <CardDescription className="text-base">
                  Advanced features for serious job seekers
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">TBA</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">AI resume optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">PDF export</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Advanced templates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">Priority updates</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" disabled>
                  Coming Soon
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Transparency Note */}
          <div className="mx-auto mt-12 max-w-3xl rounded-lg border bg-muted/50 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <strong className="font-semibold text-foreground">Transparency Note:</strong> Payments are not active yet. This site is currently in preview mode. All features shown in the Free Plan are available to everyone at no cost.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t bg-muted/20 py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-semibold">When will the Pro Plan be available?</h3>
                <p className="text-muted-foreground">
                  We're currently in preview mode and working hard to bring you premium features. Stay tuned for updates on our blog and social media channels.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Will the Free Plan always be free?</h3>
                <p className="text-muted-foreground">
                  Yes! We're committed to keeping core resume building features free forever. Our mission is to make quality resume tools accessible to everyone.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Can I upgrade or downgrade my plan later?</h3>
                <p className="text-muted-foreground">
                  Once the Pro Plan launches, you'll be able to upgrade at any time. You can also downgrade back to the Free Plan whenever you choose.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">What payment methods will you accept?</h3>
                <p className="text-muted-foreground">
                  When payments go live, we plan to accept major credit cards, debit cards, and other popular payment methods to make it convenient for users worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
