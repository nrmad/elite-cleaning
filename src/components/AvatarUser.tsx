import { fallback } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface PropTypes {
  url: string;
  firstname: string;
  surname: string;
}

export function AvatarUser({ url, firstname, surname }: PropTypes) {
  return (
    <div className="flex space-x-2 items-center">
      <Avatar className="w-6 h-6">
        <AvatarImage src={url} />
        <AvatarFallback>{fallback(firstname, surname)}</AvatarFallback>
      </Avatar>
      <p className="text-sm font-semibold">{`${firstname} ${surname}`}</p>
    </div>
  );
}
