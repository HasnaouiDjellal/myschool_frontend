<script setup>
import { ref } from 'vue';

const open = ref(false);

const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

const timeSlots = [
    "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM",
    "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM"
];

const schedule = ref([
    {
        day: "Sunday",
        start: "09:00 AM",
        end: "11:00 AM",
        title: "2350",
        subtitle: "A1.1 - Fr - Teens",
        color: "bg-purple-100 text-purple-700"
    },
    {
        day: "Monday",
        start: "09:00 AM",
        end: "12:00 PM",
        title: "Not Available",
        subtitle: "",
        color: "bg-[#D1D8E7] text-gray-600"
    },
    {
        day: "Tuesday",
        start: "08:00 AM",
        end: "10:00 AM",
        title: "2350",
        subtitle: "A1.1 - Fr - Teens",
        color: "bg-purple-100 text-purple-700"
    },
    {
        day: "Monday",
        start: "06:00 PM",
        end: "08:00 PM",
        title: "2401",
        subtitle: "A1.1 - Fr - Adults",
        color: "bg-yellow-100 text-yellow-700"
    },
    {
        day: "Wednesday",
        start: "06:00 PM",
        end: "09:00 PM",
        title: "2401",
        subtitle: "A1.1 - Fr - Adults",
        color: "bg-yellow-100 text-yellow-700"
    },
    {
        day: "Tuesday",
        start: "03:00 PM",
        end: "06:00 PM",
        title: "Not Available",
        subtitle: "",
        color: "bg-gray-200 text-gray-600"
    },
    {
        day: "Friday",
        start: "03:00 PM",
        end: "04:30 PM",
        title: "BAC - 20",
        subtitle: "BAC | French | Sci",
        color: "bg-green-100 text-green-700"
    }
]);

function timeTo24(timeStr) {
    const [time, modifier] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    if (modifier === "PM" && hours < 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
}

function timeToMinutes(timeStr) {
    const [time, modifier] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    if (modifier === "PM" && hours < 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;
    return hours * 60 + minutes;
}

function getSlotHeight(start, end) {
    const startTime = timeToMinutes(start);
    const endTime = timeToMinutes(end);
    const duration = endTime - startTime;
    const heightPerMinute = 4 / 60; // 4rem per hour
    return duration * heightPerMinute;
}

function filteredEvents(day, time) {
    return schedule.value.filter((event) => {
        return (
            event.day === day &&
            timeTo24(event.start) === timeTo24(time)
        );
    });
}
</script>

<template>
    <div class="relative h-full w-full max-w-6xl mt-4 bg-[#E8EBF2] rounded-2xl shadow-xl p-6 overflow-auto">
        <!-- Header -->
        <div class="flex justify-between items-center mb-4 border-b pb-2">
            <h2 class="text-xl font-bold text-black">Teacher Availability</h2>
            <button class="text-gray-500 hover:text-gray-700" @click="open = false">
                <svg class="w-8 h-8" viewBox="0 0 40 40" fill="none">
                    <path
                        d="M16.7171 14.9494C16.229 14.4612 15.4375 14.4612 14.9494 14.9494C14.4612 15.4375 14.4612 16.229 14.9494 16.7171L18.2321 19.9999L14.9494 23.2828C14.4612 23.7708 14.4612 24.5623 14.9494 25.0504C15.4375 25.5386 16.229 25.5386 16.7171 25.0504L20 21.7678L23.2826 25.0504C23.7708 25.5386 24.5623 25.5386 25.0505 25.0504C25.5386 24.5623 25.5386 23.7708 25.0505 23.2826L21.7676 19.9999L25.0505 16.7171C25.5386 16.229 25.5386 15.4376 25.0505 14.9494C24.5623 14.4612 23.7708 14.4612 23.2826 14.9494L20 18.2321L16.7171 14.9494Z"
                        fill="#22305C" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M20 2.08337C10.1049 2.08337 2.08337 10.1049 2.08337 20C2.08337 29.8952 10.1049 37.9167 20 37.9167C29.8952 37.9167 37.9167 29.8952 37.9167 20C37.9167 10.1049 29.8952 2.08337 20 2.08337ZM4.58337 20C4.58337 11.4857 11.4857 4.58337 20 4.58337C28.5144 4.58337 35.4167 11.4857 35.4167 20C35.4167 28.5144 28.5144 35.4167 20 35.4167C11.4857 35.4167 4.58337 28.5144 4.58337 20Z"
                        fill="#22305C" />
                </svg>
            </button>
        </div>

        <div
            class="space-y-4 text-[#22305C] rounded-lg overflow-x-auto whitespace-nowrap">
            <div class="pr-3 pl-3 pb-3 overflow-x-auto bg-[#E8EBF2] rounded-md whitespace-nowrap">
                <!-- Row 1 -->
                <span class="text-[#22305C] text-md font-bold py-1.5 px-3">Teacher Name</span>
                <input id="amount" type="text"
                    class="w-60 py-1.5 px-3 text-center border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                    placeholder="مسعي أحمد محمد العروسي" disabled required />
                <span class="text-[#22305C] text-md font-bold py-1.5 px-3">Phone number</span>
                <input id="average" type="text"
                    class="w-22 py-1.5 px-3 border text-center rounded-l-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                    placeholder="06 66 66 66 66" disabled required /><input id="average" type="text"
                    class="w-22 py-1.5 px-3 border text-center rounded-r-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                    placeholder="06 66 66 66 66" disabled required />
            </div>
        </div>

        <!-- Schedule Grid -->
        <div class="grid grid-cols-8 border-t border-l text-md font-bold text-[#22305C]">
            <!-- Time header -->
            <div class="bg-[#E8EBF2] border-b border-r p-2 font-bold">Time</div>
            <div v-for="day in days" :key="day" class="text-center border-b border-r p-2 font-bold">
                {{ day }}
            </div>

            <!-- Time rows and event blocks -->
            <template v-for="(time, timeIndex) in timeSlots" :key="time + timeIndex">
                <!-- Time label -->
                <div class="border-b border-r p-2 text-sm">{{ time }}</div>

                <!-- Each day column -->
                <template v-for="day in days" :key="day + time">
                    <div class="relative border-b border-r h-16 text-xl text-center">
                        <div v-for="event in filteredEvents(day, time)" :key="event.title + event.start"
                            class="absolute left-0 right-0 top-0 rounded-md p-1 text-xs overflow-hidden z-10"
                            :class="event.color" :style="{ height: getSlotHeight(event.start, event.end) + 'rem' }">
                            <div class="font-semibold">{{ event.title }}</div>
                            <div>{{ event.subtitle }}</div>
                        </div>
                    </div>
                </template>
            </template>
        </div>
    </div>
</template>
