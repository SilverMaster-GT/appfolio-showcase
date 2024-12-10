import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
  };

  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-xl mx-auto">
        <Card className="slide-up">
          <CardHeader>
            <CardTitle>Ponte en contacto</CardTitle>
            <CardDescription>
              ¿Tienes un proyecto en mente? ¡Trabajemos juntos!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input placeholder="Tú nombre" required />
              </div>
              <div className="space-y-2">
                <Input type="email" placeholder="Tú correo" required />
              </div>
              <div className="space-y-2">
                <Textarea placeholder="Tú Mensaje" required />
              </div>
              <Button type="submit" className="w-full">
                Enviar Mensaje
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;