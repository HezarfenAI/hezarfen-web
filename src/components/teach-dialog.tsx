"use client";

import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem} from "@/components/ui/sidebar";
import React from "react";
import {BookIcon} from "lucide-react";
import {Textarea} from "@/components/ui/textarea";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "./ui/form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "./ui/select";
import Link from "next/link";
import {useForm} from "react-hook-form";
import {sendData} from "@/server-actions/ai-actions";

const formSchema = z.object({
    text: z.string({ required_error: "Lütfen bir içerik giriniz" }).nonempty("İçerik boş olamaz"),
    url: z.string({ required_error: "Lütfen bir URL giriniz" }).url("Geçerli bir URL giriniz"),
    label: z.string({ required_error: "Lütfen bir etiket seçiniz" }).nonempty("Etiket boş olamaz"),
});

export function TeachDialog() {
    const submit = async (data: z.infer<typeof formSchema>) => {
        form.reset({
            text: "",
            url: "",
            label: undefined,
        });
        await sendData(data.text, data.url, data.label);
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            label: undefined,
        }
    });

    return (
        <Dialog>
            <DialogTrigger asChild>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                        <div className="cursor-pointer">
                            <BookIcon/>
                            <span>Eğit Beni</span>
                        </div>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>HezarfenAI - Manuel Eğitim</DialogTitle>
                    <DialogDescription>
                        Bu Menüden Yapay Zeka Modelini Manuel Olarak Eğitebilirsiniz.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form className="space-y-3" onSubmit={form.handleSubmit(submit)}>
                        <FormField
                            control={form.control}
                            name="url"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Haber Kaynağı (Url)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Haber kaynağını belirtiniz" type={"text"} {...field} />
                                    </FormControl>
                                    <FormDescription>Eğitme işleminde kullanılacak haberin alındığı kaynak</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="label"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Etiketi</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Haberin etiketini seçiniz" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="REAL">Gerçek Haber</SelectItem>
                                            <SelectItem value="FAKE">Sahte Haber</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormDescription>
                                        Haberin "Gerçek" veya "Sahte" olduğunu belirtir.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="text"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Haber İçeriği</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="İçeriği giirniz" {...field} />
                                    </FormControl>
                                    <FormDescription>Haberin İçeriğini Belirtir</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <Button type="submit">Veriyi Kaydet</Button>
                        </DialogFooter>
                    </form>
                </Form>

            </DialogContent>
        </Dialog>
    )
}
