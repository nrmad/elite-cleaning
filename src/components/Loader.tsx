import { Loader2 } from "lucide-react";

export default function Loader() {

    return (
        <div className=" flex flex-col flex-1  justify-center items-center space-y-8 w-full h-screen" >
            <Loader2 className="h-6 w-6 animate-spin" />
        </div>
    )
}

