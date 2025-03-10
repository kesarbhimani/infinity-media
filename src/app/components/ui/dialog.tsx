'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = DialogPrimitive.Overlay;
const DialogContent = DialogPrimitive.Content;
const DialogClose = DialogPrimitive.Close;
const DialogTitle = DialogPrimitive.Title;
const DialogDescription = DialogPrimitive.Description;

const SimpleDialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogOverlay>,
  React.ComponentPropsWithoutRef<typeof DialogOverlay>
>((props, ref) => (
  <DialogOverlay
    ref={ref}
    className="fixed inset-0 bg-black/50"
    {...props}
  />
));
SimpleDialogOverlay.displayName = DialogOverlay.displayName;

const SimpleDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogContent>,
  React.ComponentPropsWithoutRef<typeof DialogContent>
>((props, ref) => (
  <DialogPortal>
    <SimpleDialogOverlay />
    <DialogContent
      ref={ref}
      className="fixed left-1/2 top-1/2 w-full max-w-md transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg"
      {...props}
    />
  </DialogPortal>
));
SimpleDialogContent.displayName = DialogContent.displayName;

export {
  Dialog,
  DialogTrigger,
  SimpleDialogContent as DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
};