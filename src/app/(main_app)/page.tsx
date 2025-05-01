import LandingPage from "@/components/landing";
import { DotPattern } from "@/components/magicui/dot-pattern";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
      <LandingPage />
    </MaxWidthWrapper>
  );
}
