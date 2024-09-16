import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="p-4 container max-w-[90vw] mx-auto bg-white">
      <div className="mb-4 text-center">
        <img
          src="/placeholder.svg"
          alt="Sabah Softwoods Berhad Logo"
          className="w-16 h-16 mx-auto mb-2"
        />
        <h2 className="text-2xl font-bold">Sabah Softwoods Berhad</h2>
        <h3 className="text-xl">OVERTIME CLAIM FORM</h3>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <div className="flex items-center mb-2">
            <label className="w-32">Name of Staff:</label>
            <Input className="flex-grow" defaultValue="Alberto Tulong" />
          </div>
          <div className="flex items-center mb-2">
            <label className="w-32">Staff No:</label>
            <Input className="flex-grow" defaultValue="102704" />
          </div>
          <div className="flex items-center mb-2">
            <label className="w-32">Department:</label>
            <Input className="flex-grow" defaultValue="Main House" />
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center justify-end mb-2">
            <label className="w-32">Designation:</label>
            <Input className="w-48" defaultValue="Cadet" />
          </div>
          <div className="flex items-center justify-end mb-2">
            <label className="w-32">Month:</label>
            <Input className="w-48" defaultValue="June 2024" />
          </div>
        </div>
      </div>
      <Table className="w-full border-collapse border border-gray-400 text-xs">
        <TableHeader>
          <TableRow>
            <TableHead
              className="text-center border border-gray-400  font-normal"
              colSpan={5}
            >
              REQUEST FOR OVERTIME
            </TableHead>
            <TableHead
              className="text-center border border-gray-400 bg-gray-100 font-normal"
              colSpan={10}
            >
              OVERTIME DETAILS
            </TableHead>
            <TableHead
              className="text-center border border-gray-400  font-normal"
              rowSpan={4}
            >
              A/Code
            </TableHead>
          </TableRow>
          <TableRow>
            <TableHead
              className="border border-gray-400 p-1 text-center font-normal"
              rowSpan={3}
            >
              Date
            </TableHead>
            <TableHead
              className="text-center border border-gray-400  font-normal"
              colSpan={2}
            >
              Date component
            </TableHead>

            <TableHead
              className="border border-gray-400 p-1 text-center font-normal"
              rowSpan={3}
            >
              Purpose of Overtime
            </TableHead>
            <TableHead
              className="border border-gray-400 p-1 text-center font-normal"
              rowSpan={3}
            >
              Approved By
            </TableHead>
            <TableHead
              className="border border-gray-400 p-1 text-center font-normal"
              rowSpan={3}
            >
              Date
            </TableHead>
            <TableHead
              className="border border-gray-400 p-1 text-center font-normal"
              rowSpan={3}
            >
              Day
            </TableHead>
            <TableHead
              className="border border-gray-400 p-1 text-center font-normal"
              colSpan={2}
            >
              Hours Worked
            </TableHead>

            <TableHead
              className="border border-gray-400 p-1 text-center font-normal"
              colSpan={2}
            >
              Normal Day
            </TableHead>
            <TableHead
              className="border border-gray-400 p-1 text-center font-normal"
              colSpan={2}
            >
              Sunday Only
            </TableHead>
            <TableHead
              className="border border-gray-400 p-1 text-center font-normal"
              colSpan={2}
            >
              Public Holiday
            </TableHead>
          </TableRow>
          <TableRow>
            {/* Nested sub-headers under the "Date component" */}
            <TableHead
              className="border border-gray-400 p-1 text-center font-normal"
              rowSpan={2}
            >
              From
            </TableHead>
            <TableHead
              className="border border-gray-400 p-1 text-center font-normal"
              rowSpan={2}
            >
              To
            </TableHead>
            <TableHead
              className="border border-gray-400 p-1 text-center font-normal"
              rowSpan={2}
            >
              From
            </TableHead>
            <TableHead
              className="border border-gray-400 p-1 text-center font-normal"
              rowSpan={2}
            >
              To
            </TableHead>
            <TableHead className="border border-gray-400 p-1 text-center font-normal">
              5 at
            </TableHead>
            <TableHead className="border border-gray-400 p-1 text-center font-normal">
              Excess 8 Hrs
            </TableHead>
            <TableHead className="border border-gray-400 p-1 text-center font-normal">
              4 Hrs 8 Hrs
            </TableHead>
            <TableHead className="border border-gray-400 p-1 text-center font-normal">
              Excess 8 Hrs
            </TableHead>
            <TableHead className="border border-gray-400 p-1 text-center font-normal">
              5 at
            </TableHead>
            <TableHead className="border border-gray-400 p-1 text-center font-normal">
              Excess 8 Hrs
            </TableHead>
          </TableRow>
          <TableRow>
            <TableHead className="border border-gray-400 p-1 text-center font-normal">
              1
            </TableHead>
            <TableHead className="border border-gray-400 p-1 text-center font-normal">
              3
            </TableHead>
            <TableHead className="border border-gray-400 p-1 text-center font-normal">
              1
            </TableHead>
            <TableHead className="border border-gray-400 p-1 text-center font-normal">
              3
            </TableHead>
            <TableHead className="border border-gray-400 p-1 text-center font-normal">
              1
            </TableHead>
            <TableHead className="border border-gray-400 p-1 text-center font-normal">
              2
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="border border-gray-400 p-1">
              04.06.2024
            </TableCell>
            <TableCell className="border border-gray-400 p-1">
              03:00 pm
            </TableCell>
            <TableCell className="border border-gray-400 p-1">
              09:00 pm
            </TableCell>
            <TableCell className="border border-gray-400 p-1">
              Mempersiapkan makan malam untuk 556 staff
            </TableCell>
            <TableCell className="border border-gray-400 p-1"></TableCell>
            <TableCell className="border border-gray-400 p-1">
              04.06.2024
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              1
            </TableCell>
            <TableCell className="border border-gray-400 p-1">
              03:00 pm
            </TableCell>
            <TableCell className="border border-gray-400 p-1">
              09:00 pm
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              1
            </TableCell>
            <TableCell className="border border-gray-400 p-1"></TableCell>
            <TableCell className="border border-gray-400 p-1"></TableCell>
            <TableCell className="border border-gray-400 p-1"></TableCell>
            <TableCell className="border border-gray-400 p-1"></TableCell>
            <TableCell
              className="border border-gray-400 p-1 text-center"
              rowSpan={5}
            >
              {" "}
              sunday 19
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-gray-400 p-1">
              07.06.2024
            </TableCell>
            <TableCell className="border border-gray-400 p-1">
              03:00 pm
            </TableCell>
            <TableCell className="border border-gray-400 p-1">
              10:00 pm
            </TableCell>
            <TableCell className="border border-gray-400 p-1">
              Mempersiapkan makan malam untuk 3 Tan Jabatan Perhutanan
              Persekutuan Sabah
            </TableCell>
            <TableCell className="border border-gray-400 p-1"></TableCell>
            <TableCell className="border border-gray-400 p-1">
              07.06.2024
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              1
            </TableCell>
            <TableCell className="border border-gray-400 p-1">
              03:00 pm
            </TableCell>
            <TableCell className="border border-gray-400 p-1">
              10:00 pm
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              6
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-gray-400 p-1">
              23.06.2024
            </TableCell>
            <TableCell className="border border-gray-400 p-1">
              03:00 pm
            </TableCell>
            <TableCell className="border border-gray-400 p-1">
              05:00 pm
            </TableCell>
            <TableCell className="border border-gray-400 p-1">
              Mempersiapkan Jamuan Raya
            </TableCell>
            <TableCell className="border border-gray-400 p-1"></TableCell>
            <TableCell className="border border-gray-400 p-1">
              23.06.2024
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              1
            </TableCell>
            <TableCell className="border border-gray-400 p-1">
              03:00 pm
            </TableCell>
            <TableCell className="border border-gray-400 p-1">
              05:00 pm
            </TableCell>
            <TableCell className="border border-gray-400 p-1"></TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              2
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-gray-400 p-1">
              26.06.2024
            </TableCell>
            <TableCell className="border border-gray-400 p-1">
              03:00 pm
            </TableCell>
            <TableCell className="border border-gray-400 p-1">
              09:00 pm
            </TableCell>
            <TableCell className="border border-gray-400 p-1">
              Mempersiapkan makan malam untuk 2 pax tamu JKKK
            </TableCell>
            <TableCell className="border border-gray-400 p-1"></TableCell>
            <TableCell className="border border-gray-400 p-1">
              26.06.2024
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              1
            </TableCell>
            <TableCell className="border border-gray-400 p-1">
              03:00 pm
            </TableCell>
            <TableCell className="border border-gray-400 p-1">
              09:00 pm
            </TableCell>
            <TableCell className="border border-gray-400 p-1"></TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              2
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-gray-400 p-1">
              27.06.2024
            </TableCell>
            <TableCell className="border border-gray-400 p-1">
              03:00 pm
            </TableCell>
            <TableCell className="border border-gray-400 p-1">
              11:00 pm
            </TableCell>
            <TableCell className="border border-gray-400 p-1">
              Mempersiapkan makan malam untuk 130 pax sempena majlis persaraan
              Dr. Yap Jookhuan
            </TableCell>
            <TableCell className="border border-gray-400 p-1"></TableCell>
            <TableCell className="border border-gray-400 p-1">
              27.06.2024
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              1
            </TableCell>
            <TableCell className="border border-gray-400 p-1">
              03:00 pm
            </TableCell>
            <TableCell className="border border-gray-400 p-1">
              11:00 pm
            </TableCell>
            <TableCell className="border border-gray-400 p-1"></TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              2
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
          </TableRow>
          <TableRow className="font-bold">
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell className="border border-gray-400 p-1" colSpan={2}>
              Total hours worked
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              9
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              19
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              0
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              6
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              0
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              6
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              250
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell className="border border-gray-400 p-1" colSpan={2}>
              Rate (RM)
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              9
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              19
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              0
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              6
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              0
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              6
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell className="border border-gray-400 p-1" colSpan={2}>
              Sub-total
            </TableCell>

            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              9
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              19
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              0
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              6
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              0
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              6
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
          </TableRow>
          <TableRow className="font-bold">
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell className="border border-gray-400 p-1" colSpan={2}>
              Total amount claimed (RM)
            </TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>

            <TableCell
              className="border border-gray-400 p-1 text-center"
              colSpan={4}
            >
              292.126
            </TableCell>
            <TableCell
              className="border border-gray-400 p-1 text-center"
              colSpan={2}
            ></TableCell>

            <TableCell className="border border-gray-400 p-1 text-center"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell className="border border-gray-400 p-1" colSpan={2}>
              (Official use only)
            </TableCell>
            <TableCell colSpan={8}></TableCell>
            <TableCell className="border border-gray-400 p-1 text-center">
              1,000
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="mt-8 flex justify-between text-sm">
        <div>
          <p className="mb-3">Compiled by</p>
          <Input className="flex-grow" defaultValue="Main House" />
        </div>
        <div>
          <p className="mb-3">Checked by</p>
          <Input className="flex-grow" defaultValue="Main House" />
        </div>
        <div>
          <p className="mb-3">Certified by</p>
          <Input className="flex-grow" defaultValue="Main House" />
        </div>
      </div>
    </div>
  );
}
