import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Cards() {
  return (
    <section id="vice-informaci" className="flex flex-col items-center gap-6">
      <div className="flex flex-col text-center gap-2">
        <h1 className="text-3xl md:text-4xl font-semibold">
          More information about our community
        </h1>
        <p className="max-w-prose text-muted-foreground">
          Below are some reasons to join our community. If you have any
          questions, don&apos;t hesitate to ask.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>
              <span className="mr-2 text-3xl">📚 </span> Categories for
              everything you need
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Development, design, programming, UX/UI and much more. If
              there&apos;s something you&apos;d like to see missing, let us
              know.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <span className="mr-2 text-3xl">❓ </span> Community support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              If you have a problem or need advice on something, don&apos;t
              hesitate to ask. Others will be happy to help you.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <span className="mr-2 text-3xl">📦 </span> You are working on a
              new project
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Do you have a new project you&apos;re working on or want to show
              off what you&apos;ve created? We&apos;d love to hear from you.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <span className="mr-2 text-3xl">🎉 </span> Events and competitions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              From time to time we organize events and competitions where you
              can win interesting prizes. Follow us on social networks or join
              our discord community.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              <span className="mr-2 text-3xl">🤝 </span> Collaboration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Would you like to become a partner in our community? Let us know
              and we will be happy to connect with you.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <span className="mr-2 text-3xl">🔔 </span> Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Stay tuned for news and announcements from our community. You can
              look forward to new features and capabilities.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
