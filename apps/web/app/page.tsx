"use client"

import { Activity, Heart, TrendingUp, User, Calendar, Phone, Mail } from "lucide-react"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@sst-vitals/ui/components/card"
import { Badge } from "@sst-vitals/ui/components/badge"
import { Button } from "@sst-vitals/ui/components/button"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@sst-vitals/ui/components/chart"
import { useQueryVitals } from "@/hooks/use-query-vitals"

export default function MedicalDashboard() {
  const { data: vitals, isLoading } = useQueryVitals();

  const { heartRateData, bloodPressureData, hrvData } = vitals || {};

  if (isLoading) return <div>Loading...</div>;

  console.log({ vitals });

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Patient Header */}
        <Card>
          <CardHeader>
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <User className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Sarah Johnson</CardTitle>
                  <CardDescription className="text-base">Patient ID: #12345 • Age: 34 • Female</CardDescription>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      <Activity className="mr-1 h-3 w-3" />
                      Active
                    </Badge>
                    <Badge variant="outline">Type 1 Diabetes</Badge>
                    <Badge variant="outline">Hypertension</Badge>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2 text-sm text-muted-foreground md:text-right">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Last Visit: Dec 15, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>sarah.j@email.com</span>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Vital Signs Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Heart Rate</CardTitle>
              <Heart className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">72 BPM</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">↓ 2 BPM</span> from last reading
              </p>
              <div className="mt-2">
                <Badge variant="secondary" className="text-green-600 bg-green-50">
                  Normal
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blood Pressure</CardTitle>
              <Activity className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">121/81</div>
              <p className="text-xs text-muted-foreground">mmHg</p>
              <div className="mt-2">
                <Badge variant="secondary" className="text-orange-600 bg-orange-50">
                  Elevated
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">HRV</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47 ms</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">↑ 3 ms</span> from yesterday
              </p>
              <div className="mt-2">
                <Badge variant="secondary" className="text-green-600 bg-green-50">
                  Good
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Temperature</CardTitle>
              <Activity className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98.6°F</div>
              <p className="text-xs text-muted-foreground">36.9°C</p>
              <div className="mt-2">
                <Badge variant="secondary" className="text-green-600 bg-green-50">
                  Normal
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Heart Rate Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Heart Rate Trend</CardTitle>
              <CardDescription>24-hour heart rate monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  heartRate: {
                    label: "Heart Rate",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={heartRateData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis domain={[60, 90]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="var(--color-heartRate)"
                      strokeWidth={2}
                      dot={{ fill: "var(--color-heartRate)" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Blood Pressure Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Blood Pressure History</CardTitle>
              <CardDescription>Weekly blood pressure readings</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  systolic: {
                    label: "Systolic",
                    color: "hsl(var(--chart-2))",
                  },
                  diastolic: {
                    label: "Diastolic",
                    color: "hsl(var(--chart-3))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={bloodPressureData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis domain={[70, 130]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="systolic"
                      stroke="var(--color-systolic)"
                      strokeWidth={2}
                      dot={{ fill: "var(--color-systolic)" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="diastolic"
                      stroke="var(--color-diastolic)"
                      strokeWidth={2}
                      dot={{ fill: "var(--color-diastolic)" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* HRV Chart - Full Width */}
        <Card>
          <CardHeader>
            <CardTitle>Heart Rate Variability</CardTitle>
            <CardDescription>Weekly HRV measurements showing autonomic nervous system health</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                hrv: {
                  label: "HRV (ms)",
                  color: "hsl(var(--chart-4))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={hrvData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis domain={[35, 55]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="var(--color-hrv)"
                    strokeWidth={3}
                    dot={{ fill: "var(--color-hrv)", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <Button className="bg-green-600 hover:bg-green-700">Schedule Appointment</Button>
          <Button variant="outline">Send Message</Button>
          <Button variant="outline">View Full History</Button>
          <Button variant="outline">Export Data</Button>
        </div>
      </div>
    </div>
  )
}
