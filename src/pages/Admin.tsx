import { useState, useEffect } from "react";
import { Users, Briefcase, GraduationCap, ShoppingBag, TrendingUp, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface User {
  email: string;
  name: string;
  userType: string;
  createdAt: string;
}

interface Application {
  id: string;
  userName: string;
  jobTitle: string;
  status: string;
  appliedAt: string;
}

const Admin = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    // Charger les utilisateurs depuis localStorage
    const storedUsers = JSON.parse(localStorage.getItem("digiJob_users") || "[]");
    setUsers(storedUsers);

    // Simuler des candidatures
    const mockApplications: Application[] = [
      {
        id: "1",
        userName: "Aminata Diallo",
        jobTitle: "Développeur Web Junior",
        status: "En attente",
        appliedAt: new Date().toISOString(),
      },
      {
        id: "2",
        userName: "Mamadou Sow",
        jobTitle: "Assistant Marketing Digital",
        status: "Accepté",
        appliedAt: new Date(Date.now() - 86400000).toISOString(),
      },
      {
        id: "3",
        userName: "Fatou Ndiaye",
        jobTitle: "Graphiste Freelance",
        status: "Refusé",
        appliedAt: new Date(Date.now() - 172800000).toISOString(),
      },
    ];
    setApplications(mockApplications);
  }, []);

  const stats = [
    {
      title: "Utilisateurs Totaux",
      value: users.length.toString(),
      icon: Users,
      description: "+12% ce mois",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Candidatures",
      value: applications.length.toString(),
      icon: Briefcase,
      description: "+8% ce mois",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Formations",
      value: "24",
      icon: GraduationCap,
      description: "6 nouvelles",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Produits",
      value: "156",
      icon: ShoppingBag,
      description: "+18% ce mois",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive"> = {
      "En attente": "secondary",
      "Accepté": "default",
      "Refusé": "destructive",
    };
    return <Badge variant={variants[status] || "default"}>{status}</Badge>;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Tableau de bord Admin
              </h1>
              <p className="text-sm text-muted-foreground">Gérez votre plateforme DigiJob</p>
            </div>
            <Button variant="outline" onClick={() => window.location.href = "/"}>
              <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
              Retour au site
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`${stat.bgColor} p-2 rounded-lg`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[600px]">
            <TabsTrigger value="users">Utilisateurs</TabsTrigger>
            <TabsTrigger value="applications">Candidatures</TabsTrigger>
            <TabsTrigger value="analytics">Statistiques</TabsTrigger>
          </TabsList>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Utilisateurs inscrits</CardTitle>
                <CardDescription>
                  Liste de tous les utilisateurs de la plateforme
                </CardDescription>
              </CardHeader>
              <CardContent>
                {users.length > 0 ? (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nom</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Date d'inscription</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{user.userType}</Badge>
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {formatDate(user.createdAt)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Aucun utilisateur inscrit pour le moment</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Applications Tab */}
          <TabsContent value="applications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Candidatures reçues</CardTitle>
                <CardDescription>Gérez les candidatures aux offres d'emploi</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Candidat</TableHead>
                      <TableHead>Poste</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {applications.map((app) => (
                      <TableRow key={app.id}>
                        <TableCell className="font-medium">{app.userName}</TableCell>
                        <TableCell>{app.jobTitle}</TableCell>
                        <TableCell>{getStatusBadge(app.status)}</TableCell>
                        <TableCell className="text-muted-foreground">
                          {formatDate(app.appliedAt)}
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            Voir détails
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Activité récente</CardTitle>
                  <CardDescription>Dernières actions sur la plateforme</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-50 p-2 rounded-lg">
                        <Users className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Nouvelle inscription</p>
                        <p className="text-xs text-muted-foreground">Il y a 2 heures</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-green-50 p-2 rounded-lg">
                        <Briefcase className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Nouvelle candidature</p>
                        <p className="text-xs text-muted-foreground">Il y a 5 heures</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-50 p-2 rounded-lg">
                        <GraduationCap className="h-4 w-4 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Formation complétée</p>
                        <p className="text-xs text-muted-foreground">Il y a 1 jour</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Résumé mensuel</CardTitle>
                  <CardDescription>Performance du mois en cours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Inscriptions</span>
                        <span className="font-medium">75%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 w-3/4" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Candidatures</span>
                        <span className="font-medium">60%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 to-green-600 w-3/5" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Formations</span>
                        <span className="font-medium">85%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 w-[85%]" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;