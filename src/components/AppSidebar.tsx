import { Building2, GraduationCap, Hospital } from "lucide-react";
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

const groups = [
  {
    title: "Ibmec",
    icon: GraduationCap,
    id: "ibmec"
  },
  {
    title: "Estácio",
    icon: Building2,
    id: "estacio"
  },
  {
    title: "IDomed",
    icon: Hospital,
    id: "idomed"
  }
];

export function AppSidebar() {
  const navigate = useNavigate();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Instituições</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {groups.map((group) => (
                <SidebarMenuItem key={group.id}>
                  <SidebarMenuButton onClick={() => navigate(`/group/${group.id}`)}>
                    <group.icon className="h-4 w-4" />
                    <span>{group.title}</span>
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