"use client";

import { GiHand } from "react-icons/gi"; 
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"
  
  export function Alert() {
    return (
      <AlertDialog defaultOpen>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center">Hey, Merhaba <GiHand className="w-6 h-6 ml-2 text-yellow-300" /></AlertDialogTitle>
            <AlertDialogDescription>
              Bu site Teknofest 2025 projemiz için demo olarak hazırlanmış ve tüm hazırlıklar bittiği zaman kullanıma açılacaktır.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Anladım</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  