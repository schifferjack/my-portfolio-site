import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSubmit } from "@formspree/react";
const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name must not be empty.",
  }),
  email: z.string().min(1, {
    message: "Email must not be empty.",
  }),
  subject: z.string(),
  message: z.string().min(1, {
    message: "message must not be empty.",
  }),
});
const Contact = (props: { id: string }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      subject: "",
    },
  });
  const onSubmit = useSubmit("xzzpkboa", form as FieldValues);
  return (
    <section className="md:h-screen pt-[100px] px-8" id={props.id}>
      <h2 className="poppins-extrabold text-4xl text-center mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
          Contact Me
        </span>
      </h2>
      <div>
        <p className="text-xl text-center">
          I'd love to hear from you! Anything from project collaboration to just
          making a new friend! Feel free to reach out!
        </p>
        <div className="md:flex justify-center items-center gap-4 my-4">
          <div className="md:w-1/2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex-col flex gap-3"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Eg: Aether" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Eg: gensin_impact@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Eg: Project Zero Mortals"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="my-3">
                  Submit
                </Button>
              </form>
            </Form>
            <div className=" flex flex-col justify-center items-center gap-4">
              {" "}
              <p className="text-center">
                Or reach me directly at{" "}
                <a
                  href="mailto:syarizashraf@gmail.com"
                  className="text-blue-500 poppins-bold"
                >
                  here
                </a>
              </p>
              <p className="text-center">
                <i className="fa-solid fa-location-dot"></i> Based in Kedah,
                Malaysia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
