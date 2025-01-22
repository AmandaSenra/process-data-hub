import { Building2, Hospital } from "lucide-react";
import ibmecLogo from "/public/1.png";
import idomedLogo from "/public/2.png";
import estacioLogo from "/public/3.png";
import { useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

type GroupType = {
  title: string;
  icon: "image" | "component";
  iconSrc?: string;
  Component?: React.ComponentType<{ className?: string }>;
  id: string;
};

const groups: GroupType[] = [
  {
    title: "Ibmec",
    icon: "image",
    iconSrc: ibmecLogo,
    id: "ibmec"
  },
  {
    title: "Estácio",
    icon: "image",
    iconSrc: estacioLogo,
    id: "estacio"
  },
  {
    title: "IDomed",
    icon: "image",
    iconSrc: idomedLogo,
    id: "idomed"
  }
];

export function AppSidebar() {
  const navigate = useNavigate();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl mb-4">Instituições</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {groups.map((group) => (
                <SidebarMenuItem key={group.id} className="mb-4">
                  <SidebarMenuButton 
                    onClick={() => navigate(`/group/${group.id}`)}
                    className="flex items-center gap-4"
                  >
                    {group.icon === "image" ? (
                      <img src={group.iconSrc} className="h-8 w-8" alt={group.title} />
                    ) : (
                      group.Component && <group.Component className="h-8 w-8" />
                    )}
                    <span className="text-2xl font-medium">{group.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}