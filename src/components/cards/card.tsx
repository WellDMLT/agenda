import {
  ChevronDownIcon,
  CircleIcon,
  PlusIcon,
  StarIcon,
} from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"

export function CardModel({service, selectedService}:any) {
  return (
    <Card className={`
      shadow-md
      ${ selectedService === service.nome
        ? "border border-rose-500"
        : "border-zinc-800/10"
    }
   '
  `}>
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>{service.nome}</CardTitle>
          <CardDescription>
           {service.descricao}
          </CardDescription>
        </div>
        <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
          <div className="bg-rose-500/40 w-full h-20 rounded-md">
            iamgem
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
           R$ {service.valor} 
          </div>
        </div>
      </CardContent>
    </Card>
  )
}