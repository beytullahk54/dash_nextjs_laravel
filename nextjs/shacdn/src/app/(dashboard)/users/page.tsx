import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sidebar } from "@/components/sidebar"
import { Topbar } from "@/components/topbar"
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function Statistics() {
  const users = [
    { id: 1, name: "Ahmet Yılmaz", email: "ahmet@yilmaz.com", role: "Admin" },
    { id: 2, name: "Alperen Yılmaz", email: "alperen@yilmaz.com", role: "User" },
  ];

  const columns = [
    { id: "name", label: "Adı" },
    { id: "email", label: "Email" },
    { id: "role", label: "Rol" },
  ];
  
  return (
    <div className="flex-1 p-4">
      <h1 className="text-3xl font-bold mb-8">Kullanıcılar</h1>
      
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">

        <Table className="w-full">
          <TableCaption>Kullanıcılar</TableCaption>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.id}>{column.label}</TableHead>
              ))}
            </TableRow> 
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </div>
    </div>
  )
}
