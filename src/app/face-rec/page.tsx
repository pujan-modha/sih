"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Camera, UserPlus, Users } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

export default function Dashboard() {
  const { toast } = useToast();

  const [attendanceMarked, setAttendanceMarked] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (cameraActive && videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.error("Error accessing camera:", err);
          setCameraActive(false);
        });
    }
  }, [cameraActive]);

  const handleMarkAttendance = () => {
    // Simulating attendance marking process
    setTimeout(() => {
      setAttendanceMarked(true);
      toast({
        title: "Attendance Marked",
        description: "Your attendance has been successfully recorded.",
      });
      setTimeout(() => setAttendanceMarked(false), 3000);
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-96 bg-white p-6 shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Attendance System
        </h1>
        <nav className="space-y-4">
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
          >
            <Camera className="h-5 w-5" />
            <span>Dashboard</span>
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
              >
                <UserPlus className="h-5 w-5" />
                <span>Add New Faculty</span>
              </a>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Add New Faculty</SheetTitle>
                <SheetDescription>
                  Enter the details of the new faculty member.
                </SheetDescription>
              </SheetHeader>
              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="faculty-name">Name</Label>
                  <Input id="faculty-name" placeholder="Enter faculty name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="faculty-role">Role</Label>
                  <Input id="faculty-role" placeholder="Enter faculty role" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="faculty-department">Department</Label>
                  <Input
                    id="faculty-department"
                    placeholder="Enter department"
                  />
                </div>
                <Button className="w-full">Add Faculty</Button>
              </div>
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
              >
                <Users className="h-5 w-5" />
                <span>Add New Student</span>
              </a>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Add New Student</SheetTitle>
                <SheetDescription>
                  Enter the details of the new student.
                </SheetDescription>
              </SheetHeader>
              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="student-name">Name</Label>
                  <Input id="student-name" placeholder="Enter student name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="student-id">Student ID</Label>
                  <Input id="student-id" placeholder="Enter student ID" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="student-course">Course</Label>
                  <Input id="student-course" placeholder="Enter course" />
                </div>
                <Button className="w-full">Add Student</Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Face Recognition Attendance
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="aspect-video bg-gray-200 rounded-md mb-4 flex items-center justify-center">
              {cameraActive ? (
                <video
                  ref={videoRef}
                  className="w-full h-full rounded-md"
                  autoPlay
                />
              ) : (
                <Button onClick={() => {
                  setCameraActive(true);
                  toast({
                    title: "Camera Activated",
                    description: "The camera has been turned on.",
                  });
                }}>
                  Activate Camera
                </Button>
              )}
            </div>
            <Button
              className="w-full"
              onClick={handleMarkAttendance}
              disabled={!cameraActive || attendanceMarked}
            >
              {attendanceMarked ? "Attendance Marked!" : "Mark Attendance"}
            </Button>
          </div>
        </div>
      </main>
      <Toaster />
    </div>
  );
}
