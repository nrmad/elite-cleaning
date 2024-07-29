import { fallback } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface PropTypes {
  url: string;
  firstname: string;
  surname: string;
  role?: string;
}

export function AvatarUser({ url, firstname, surname, role }: PropTypes) {
  return (
    <div className="flex space-x-2 items-center">
      <Avatar className="w-10 h-10">
        <AvatarImage src={url} />
        <AvatarFallback>{fallback(firstname, surname)}</AvatarFallback>
      </Avatar>
      <span className="flex flex-col">
        <p className="text-sm ">{`${firstname} ${surname}`}</p>
        <p className="text-sm text-muted-foreground">{`${role ? role : ""}`}</p>
      </span>
    </div>
  );
}
