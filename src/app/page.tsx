"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  AreaChart,
  Area,
} from "recharts";
import {
  CalendarIcon,
  BellIcon,
  BookOpenIcon,
  UserIcon,
  AwardIcon,
  ClipboardIcon,
  WifiIcon,
  ThermometerIcon,
  BatteryChargingIcon,
  LightbulbIcon,
  VideoIcon,
  VolumeIcon,
  SpeakerIcon,
  MessageSquareIcon,
  FileTextIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";

// Mock data (unchanged)
const attendanceData = [
  { date: "Mon", present: 45, absent: 5 },
  { date: "Tue", present: 48, absent: 2 },
  { date: "Wed", present: 47, absent: 3 },
  { date: "Thu", present: 49, absent: 1 },
  { date: "Fri", present: 46, absent: 4 },
];

const marksDistribution = [
  { range: "0-20", count: 2 },
  { range: "21-40", count: 5 },
  { range: "41-60", count: 15 },
  { range: "61-80", count: 20 },
  { range: "81-100", count: 8 },
];

const genderPerformance = [
  { name: "Male", value: 75 },
  { name: "Female", value: 82 },
];

const studentEngagement = [
  { name: "Participation", value: 80 },
  { name: "Attention", value: 65 },
  { name: "Collaboration", value: 90 },
  { name: "Critical Thinking", value: 70 },
  { name: "Creativity", value: 85 },
];

const performanceTrend = [
  { month: "Jan", avgScore: 70 },
  { month: "Feb", avgScore: 72 },
  { month: "Mar", avgScore: 75 },
  { month: "Apr", avgScore: 78 },
  { month: "May", avgScore: 80 },
  { month: "Jun", avgScore: 82 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

export default function Component() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Smart Classroom Analytics
            </h1>
            <p className="text-xl text-gray-600 mt-2">
              Welcome back, Prof. Sarah Johnson!
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-[280px] justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? date.toDateString() : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Button variant="secondary" size="icon">
              <BellIcon className="h-5 w-5 text-primary" />
            </Button>
            <Avatar>
              <AvatarImage
                src="/placeholder.svg?height=40&width=40"
                alt="Sarah Johnson"
              />
              <AvatarFallback className="border-2 border-primary text-primary">
                SJ
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Quick Actions
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button>Create New Assignment</Button>
            <Button variant="outline">Schedule Class</Button>
            <Button variant="outline">Launch Interactive Quiz</Button>
            <Button variant="outline">View Analytics</Button>
            <Button variant="outline">Start Live Session</Button>
            <Button variant="outline">
              <MessageSquareIcon className="mr-2 h-4 w-4" />
              Send Announcement
            </Button>
            <Button variant="outline">
              <FileTextIcon className="mr-2 h-4 w-4" />
              Generate Progress Reports
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Students
              </CardTitle>
              <UserIcon className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1,234</div>
              <p className="text-sm text-muted-foreground">
                +2% from last semester
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Average Attendance
              </CardTitle>
              <ClipboardIcon className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">93%</div>
              <p className="text-sm text-muted-foreground">
                +5% from last week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Average Score
              </CardTitle>
              <AwardIcon className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">78.5</div>
              <p className="text-sm text-muted-foreground">
                +2.3 from last exam
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Courses</CardTitle>
              <BookOpenIcon className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">25</div>
              <p className="text-sm text-muted-foreground">
                Across 5 departments
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Attendance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="present" fill="#8884d8" />
                  <Bar dataKey="absent" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>IoT Device Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <WifiIcon className="h-4 w-4 text-green-500" />
                    <span>Wi-Fi</span>
                  </div>
                  <Badge>Connected</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <ThermometerIcon className="h-4 w-4 text-blue-500" />
                    <span>Temperature</span>
                  </div>
                  <Badge>22°C</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BatteryChargingIcon className="h-4 w-4 text-yellow-500" />
                    <span>Smart Board Battery</span>
                  </div>
                  <Badge>85%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <LightbulbIcon className="h-4 w-4 text-orange-500" />
                    <span>Lighting</span>
                  </div>
                  <Badge>On (70%)</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <VideoIcon className="h-4 w-4 text-purple-500" />
                    <span>Cameras</span>
                  </div>
                  <Badge>Active (2/2)</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <VolumeIcon className="h-4 w-4 text-pink-500" />
                    <span>Audio System</span>
                  </div>
                  <Badge>Active (4/4)</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <SpeakerIcon className="h-4 w-4 text-indigo-500" />
                    <span>Speakers</span>
                  </div>
                  <Badge>Connected</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Real-time Student Engagement</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  data={studentEngagement}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="name" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar
                    name="Student"
                    dataKey="value"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Student Sentiment Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Very Positive</span>
                    <span className="text-sm font-medium">35%</span>
                  </div>
                  <Progress
                    value={35}
                    className="h-2 bg-green-200"
                    // indicatorClassName="bg-green-500"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Positive</span>
                    <span className="text-sm font-medium">40%</span>
                  </div>
                  <Progress
                    value={40}
                    className="h-2 bg-blue-200"
                    // indicatorClassName="bg-blue-500"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Neutral</span>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                  <Progress
                    value={15}
                    className="h-2 bg-gray-200"
                    // indicatorClassName="bg-gray-500"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Negative</span>
                    <span className="text-sm font-medium">7%</span>
                  </div>
                  <Progress
                    value={7}
                    className="h-2 bg-yellow-200"
                    // indicatorClassName="bg-yellow-500"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Very Negative</span>
                    <span className="text-sm font-medium">3%</span>
                  </div>
                  <Progress
                    value={3}
                    className="h-2 bg-red-200"
                    // indicatorClassName="bg-red-500"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Performance by Gender</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={genderPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8">
                    {genderPerformance.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Marks Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={marksDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="count"
                    label
                  >
                    {marksDistribution.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Performance Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={performanceTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="avgScore"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Learning Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <BookOpenIcon className="h-5 w-5 text-blue-500" />
                  <span>
                    Introduce more interactive coding exercises in CS101
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <UserIcon className="h-5 w-5 text-green-500" />
                  <span>
                    Provide additional support for struggling students in
                    Math202
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <AwardIcon className="h-5 w-5 text-yellow-500" />
                  <span>
                    Implement peer-review system for English Literature essays
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Smart Classroom Events</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span>Virtual Reality History Lesson</span>
                  <Badge>Mar 15</Badge>
                </li>
                <li className="flex justify-between items-center">
                  <span>AI-Assisted Coding Workshop</span>
                  <Badge>Mar 22</Badge>
                </li>
                <li className="flex justify-between items-center">
                  <span>Smart Board Training for Faculty</span>
                  <Badge>Apr 5</Badge>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-12">
        <div className="px-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">
                Smart Classroom Analytics
              </h3>
              <p className="text-sm text-gray-400">
                Empowering educators with data-driven insights for better
                learning outcomes.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FacebookIcon className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <TwitterIcon className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <InstagramIcon className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Reports
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Analytics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Help & Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Useful Tools</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Attendance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Performance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Mock Tests
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Interactions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Other Tools
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Webinars
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    API Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Community Forum
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-sm text-gray-400 mb-4">
                Stay updated with our latest features and releases.
              </p>
              <form className="space-y-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                />
                <Button className="w-full">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; 2023 Smart Classroom Analytics. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
