import { CornerDownLeft, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Contact from "@/components/Contact";
import Chatbox from "./Chatbox";

export function Dashboard() {
  return (
    <div className="grid w-full">
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
          <h1 className="text-xl font-semibold">WhattsApp 2.0</h1>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Settings className="size-4" />
                <span className="sr-only">Settings</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[80vh]">
              <DrawerHeader>
                <DrawerTitle className="text-center py-2 pb-6">
                  Online Users
                </DrawerTitle>
              </DrawerHeader>
              <div className="pb-8">
                <div className="w-full items-start flex flex-col gap-2 px-4 h-[500px] overflow-auto ">
                  <Contact firstName="Kashif" lastName="Kamran" />
                  <Contact firstName="Amir" lastName="Hussain" />
                  <Contact firstName="Kashif" lastName="Kamran" />
                  <Contact firstName="Kashif" lastName="Kamran" />
                  <Contact firstName="Kashif" lastName="Kamran" />
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </header>
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="pb-8 hidden md:block">
            <h1 className="text-[1.2rem] text-center pb-2">Online Users</h1>
            <div className="w-full items-start flex flex-col gap-2 px-4 overflow-auto ">
              <Contact firstName="Kashif" lastName="Kamran" />
              <Contact firstName="Afnan" lastName="Akram" />
              <Contact firstName="Faizan" lastName="Ashfaq" />
              <Contact firstName="Awais" lastName="Muhammad" />
              <Contact firstName="Saad" lastName="Hussain" />
              <Contact firstName="Saud" lastName="Hussain" />
            </div>
          </div>
          <div className="relative flex  flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
            <div className="h-[540px] flex flex-col gap-2">
              <Chatbox />
            </div>
            <form
              className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
              x-chunk="dashboard-03-chunk-1"
            >
              <Label htmlFor="message" className="sr-only">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Type your message here..."
                className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
              />
              <div className="flex items-center p-3 pt-0">
                <Button type="submit" size="sm" className="ml-auto gap-1.5">
                  Send Message
                  <CornerDownLeft className="size-3.5" />
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
