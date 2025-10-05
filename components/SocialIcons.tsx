import {
  RiFacebookFill,
  RiGithubFill,
  RiGoogleFill,
  RiTwitterXFill,
} from "@remixicon/react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SocialIcons() {
  return (
    <div className="inline-flex flex-wrap gap-2">
      <Link href="https://www.facebook.com/codewithnabil">
        <Button variant="outline" aria-label="Login with Facebook" size="icon">
          <RiFacebookFill size={16} aria-hidden="true" />
        </Button>
      </Link>

      <Link href="https://x.com/SiddikNabil">
        <Button variant="outline" aria-label="Login with X" size="icon">
          <RiTwitterXFill size={16} aria-hidden="true" />
        </Button>
      </Link>

      <Link href="https://github.com/nabilsiddik">
        <Button variant="outline" aria-label="Login with GitHub" size="icon">
          <RiGithubFill size={16} aria-hidden="true" />
        </Button>
      </Link>
    </div>
  );
}
