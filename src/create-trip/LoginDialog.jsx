import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

export default function LoginDialog({ openDialog, setDialog, login }) {
    return (
        <Dialog open={openDialog} onOpenChange={setDialog}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="font-bold text-lg">Sign In With Google</DialogTitle>
                    <DialogDescription>
                        Sign in to the App with Google Authentication Securely to view your plan
                        <Button className="w-full mt-5 flex gap-3 items-center" onClick={login}>
                            <FcGoogle className="w-7 h-7" />
                            Sign In With Google
                        </Button>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
