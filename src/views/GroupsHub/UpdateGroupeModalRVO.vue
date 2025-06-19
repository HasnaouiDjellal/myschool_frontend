<script setup>
import { ref } from 'vue';
const open = ref(false);
const rows = ref([
    {
        id: "1",
        admin: "Raouf Boukhoucha",
        date: "DD/MM/YYYY",
        time: "00:00",
        reason: "New group",
        comment: "Not Comming",
    },
    {
        id: "2",
        admin: "Raouf Boukhoucha",
        date: "DD/MM/YYYY",
        time: "00:00",
        reason: "New group",
        comment: "Not Comming",
    },
    {
        id: "3",
        admin: "Raouf Boukhoucha",
        date: "DD/MM/YYYY",
        time: "00:00",
        reason: "New group",
        comment: "Not Comming",
    },
    {
        id: "4",
        admin: "Raouf Boukhoucha",
        date: "DD/MM/YYYY",
        time: "00:00",
        reason: "New group",
        comment: "Not Comming",
    },

]);
</script>

<template>

    <!-- Modal Content -->
    <div
        class="relative w-full h-full max-w-5xl mt-4 bg-[#E8EBF2] rounded-2xl shadow-xl p-2 pl-6 pr-6 overflow-auto">
        <!-- Modal Header -->
        <div class="flex justify-between items-center mb-2 border-b pb-2 overflow-x-auto">
            <h2 id="modal-title" class="text-xl font-bold text-black">
                Update Group
            </h2>
            <!-- Close Button -->
            <button class="text-gray-500 hover:text-gray-700 focus:outline-none" @click="open = false">
                <svg class="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.7171 14.9494C16.229 14.4612 15.4375 14.4612 14.9494 14.9494C14.4612 15.4375 14.4612 16.229 14.9494 16.7171L18.2321 19.9999L14.9494 23.2828C14.4612 23.7708 14.4612 24.5623 14.9494 25.0504C15.4375 25.5386 16.229 25.5386 16.7171 25.0504L20 21.7678L23.2826 25.0504C23.7708 25.5386 24.5623 25.5386 25.0505 25.0504C25.5386 24.5623 25.5386 23.7708 25.0505 23.2826L21.7676 19.9999L25.0505 16.7171C25.5386 16.229 25.5386 15.4376 25.0505 14.9494C24.5623 14.4612 23.7708 14.4612 23.2826 14.9494L20 18.2321L16.7171 14.9494Z"
                        fill="#22305C" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M20 2.08337C10.1049 2.08337 2.08337 10.1049 2.08337 20C2.08337 29.8952 10.1049 37.9167 20 37.9167C29.8952 37.9167 37.9167 29.8952 37.9167 20C37.9167 10.1049 29.8952 2.08337 20 2.08337ZM4.58337 20C4.58337 11.4857 11.4857 4.58337 20 4.58337C28.5144 4.58337 35.4167 11.4857 35.4167 20C35.4167 28.5144 28.5144 35.4167 20 35.4167C11.4857 35.4167 4.58337 28.5144 4.58337 20Z"
                        fill="#22305C" />
                </svg>
            </button>
        </div>
        <!-- Groupe Info -->
        <div class="space-y-4 pb-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
            <div class="flex max-w-5xl p-2 bg-[#D1D8E7] rounded-t-lg">
                <h2 class="text-lg font-semibold text-gray-800 mb-1">
                    Group Information
                </h2>
            </div>

            <!-- First Row -->
            <div class="grid grid-cols-1 sm:grid-cols-6 gap-4 pr-3 pl-3 items-center">
                <label class="text-[#22305C] font-bold whitespace-nowrap">
                    Teacher Name
                </label>
                <input id="enrolledfirstname" type="text"
                    class="col-span-5 w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                    placeholder="Teacher Name" />
            </div>

            <!-- Second Row -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 pr-3 pl-3 items-center">
                <label class="text-[#22305C] font-bold whitespace-nowrap">
                    Payment Type
                </label>
                <select id="paymenttype" v-model="paymenttype"
                    class="w-full py-1.5 px-3 text-center font-bold rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D] border"
                    :class="paymenttypeClasses">
                    <option value="bymonth">By Month</option>
                    <option value="bysession">By Session</option>
                </select>

                <label class="text-[#22305C] font-bold whitespace-nowrap">
                    Remuneration
                </label>
                <input id="remu" type="text" v-model="remu"
                    class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" disabled />

                <label class="text-[#22305C] font-bold whitespace-nowrap">
                    Type Remuneration
                </label>
                <select id="typerem"
                    class="w-full py-1.5 px-3 text-center rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D] border">
                    <option value="bymonth">By Hour</option>
                    <option value="bysession">FIX</option>
                </select>
            </div>
        </div>

        <!-- Groupe Info Suit -->
        <div class="space-y-4 mt-4 pb-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
            <div class="flex max-w-5xl p-2 bg-[#D1D8E7] rounded-t-lg">
                <h2 class="text-lg font-semibold text-gray-800 mb-1"></h2>
            </div>

            <!-- First Row -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 pr-3 pl-3 items-center">
                <label class="text-[#22305C] font-bold whitespace-nowrap">Start Date</label>
                <input id="startdate" type="date" v-model="startdate"
                    class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" />

                <label class="text-[#22305C] text-center font-bold whitespace-nowrap">Price</label>
                <input id="price" type="text" v-model="price"
                    class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" />

                <label class="text-[#22305C] font-bold whitespace-nowrap">Session Duration</label>
                <input id="sessiondu" type="text" v-model="sessiondu"
                    class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" />
            </div>

            <!-- Second Row -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 gap-4 pr-3 pl-3 items-center mt-4">
                <label class="text-[#22305C] font-bold whitespace-nowrap">Payment Type</label>
                <select id="paymenttype" v-model="paymenttype"
                    class="w-full py-1.5 px-3 text-center font-bold rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D] border"
                    :class="paymenttypeClasses">
                    <option value="bymonth">By Month</option>
                    <option value="bysession">By Session</option>
                </select>

                <label class="text-[#22305C] font-bold whitespace-nowrap">Session Number</label>
                <input id="sessionnumber" type="text" v-model="sessionnumber"
                    class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" />

                <label class="text-[#22305C] text-center font-bold whitespace-nowrap">Room</label>
                <select id="room"
                    class="w-full py-1.5 px-3 text-center rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D] border">
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>

                <label class="text-[#22305C] text-center font-bold whitespace-nowrap">Status</label>
                <select id="status" v-model="status"
                    class="w-full py-1.5 px-3 text-center font-bold rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D] border"
                    :class="StatusClasses">
                    <option value="active">Active</option>
                    <option value="freeze">Freeze</option>
                    <option value="reactive">Reactive</option>
                    <option value="stopped">Stopped</option>
                    <option value="merage">Merage</option>
                    <option value="newlevel">New Level</option>
                </select>
            </div>
        </div>

        <!-- Days and Time -->
        <div class="space-y-4 mt-4 pb-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
            <!-- Title -->
            <div class="flex max-w-5xl p-2 bg-[#D1D8E7] rounded-t-lg">
                <h2 class="text-lg font-semibold text-gray-800 mb-1">
                    Days and Time
                </h2>
            </div>

            <!-- Days Radio Buttons -->
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 px-3 items-center">

                <div class="flex items-center space-x-2">
                    <input type="radio" name="category" id="friday" />
                    <label class="text-[#22305C] text-md font-bold hover:cursor-pointer" for="friday">Friday</label>
                </div>

                <div class="flex items-center space-x-2">
                    <input type="radio" name="category" id="Saturday" />
                    <label class="text-[#22305C] text-md font-bold hover:cursor-pointer" for="Saturday">Saturday</label>
                </div>

                <div class="flex items-center space-x-2">
                    <input type="radio" name="category" id="Sunday" />
                    <label class="text-[#22305C] text-md font-bold hover:cursor-pointer" for="Sunday">Sunday</label>
                </div>

                <div class="flex items-center space-x-2">
                    <input type="radio" name="category" id="Monday" />
                    <label class="text-[#22305C] text-md font-bold hover:cursor-pointer" for="Monday">Monday</label>
                </div>

                <div class="flex items-center space-x-2">
                    <input type="radio" name="category" id="Tuesday" />
                    <label class="text-[#22305C] text-md font-bold hover:cursor-pointer" for="Tuesday">Tuesday</label>
                </div>

                <div class="flex items-center space-x-2">
                    <input type="radio" name="category" id="Wednesday" />
                    <label class="text-[#22305C] text-md font-bold hover:cursor-pointer"
                        for="Wednesday">Wednesday</label>
                </div>

                <div class="flex items-center space-x-2">
                    <input type="radio" name="category" id="Thursday" />
                    <label class="text-[#22305C] text-md font-bold hover:cursor-pointer" for="Thursday">Thursday</label>
                </div>

            </div>

            <!-- Time Inputs -->
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 px-3 items-center">
                <input id="T1" type="text" v-model="T1"
                    class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                    placeholder="08:00" />

                <input id="T2" type="text" v-model="T2"
                    class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                    placeholder="08:00" />

                <input id="T3" type="text" v-model="T3"
                    class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                    placeholder="08:00" />

                <input id="T4" type="text" v-model="T4"
                    class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                    placeholder="08:00" />

                <input id="T5" type="text" v-model="T5"
                    class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                    placeholder="08:00" />

                <input id="T6" type="text" v-model="T6"
                    class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                    placeholder="08:00" />

                <input id="T7" type="text" v-model="T7"
                    class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                    placeholder="08:00" />
            </div>
        </div>



        <!-- Form -->
        <form class="space-y-4 mt-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
            <div class="flex px-2 py-2 space-x-4 overflow-x-auto bg-[#E8EBF2] rounded-md justify-end">
                <button
                    class="px-4 py-2 bg-[#3D548D] font-medium tracking-wide text-white transition-colors duration-200 transform rounded-lg hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                    Save
                </button>
            </div>


        </form>

    </div>

</template>
<script>
export default {
    data() {
        return {
            paymenttype: 'bymonth', // Default value
            status: 'bymonth', // Default value
            remu: 500,
            startdate: '2023-10-01',
            price: 100,
            sessiondu: "1:30", // Default value for session duration
            sessionnumber: 10, // Default value for session number
        };
    },
    computed: {
        StatusClasses() {
            switch (this.status) {
                case 'active':
                    return 'bg-[#E8F5E9] text-[#388E3C] border-[#E8F5E9]';
                case 'reactive':
                    return 'bg-[#FFF8E1] text-[#FF6F00] border-[#FFF8E1]';
                case 'freeze':
                    return 'bg-[#E4FCFF] text-[#3279B2] border-[#E4FCFF]';
                case 'stopped':
                    return 'bg-[#FCE4EC] text-[#D32F2F] border-[#FCE4EC]';
                case 'merage':
                    return 'bg-[#EDE5F7] text-[#9B3EAB] border-[#EDE5F7]';
                case 'newlevel':
                    return 'bg-[#FFEEE0] text-[#FF6F00] border-[#FFEEE0]';
                default:
                    return '';
            }
        },
        // Function to determine the classes based on payment type
        paymenttypeClasses() {
            switch (this.paymenttype) {
                case 'bymonth':
                    return 'bg-[#E4FCFF] text-[#3279B2] border-[#E4FCFF]';
                case 'bysession':
                    return 'bg-[#FFEEE0] text-[#FF6F00] border-[#FFEEE0]';
                default:
                    return '';
            }
        }
    }

};


</script>