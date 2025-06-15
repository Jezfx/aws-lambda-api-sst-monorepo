const heartRateData = [
  { time: "00:00", value: 72 },
  { time: "04:00", value: 68 },
  { time: "08:00", value: 75 },
  { time: "12:00", value: 82 },
  { time: "16:00", value: 78 },
  { time: "20:00", value: 74 },
  { time: "24:00", value: 70 },
];

const bloodPressureData = [
  { time: "Week 1", systolic: 120, diastolic: 80 },
  { time: "Week 2", systolic: 118, diastolic: 78 },
  { time: "Week 3", systolic: 122, diastolic: 82 },
  { time: "Week 4", systolic: 125, diastolic: 85 },
  { time: "Week 5", systolic: 119, diastolic: 79 },
  { time: "Week 6", systolic: 121, diastolic: 81 },
];

const hrvData = [
  { time: "Mon", value: 45 },
  { time: "Tue", value: 42 },
  { time: "Wed", value: 48 },
  { time: "Thu", value: 44 },
  { time: "Fri", value: 46 },
  { time: "Sat", value: 50 },
  { time: "Sun", value: 47 },
];

export async function handler() {
  return {
    statusCode: 200,
    body: JSON.stringify({
      heartRateData,
      bloodPressureData,
      hrvData,
    }),
  };
}
