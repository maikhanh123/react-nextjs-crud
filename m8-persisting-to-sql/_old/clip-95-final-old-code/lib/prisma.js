import { PrismaClient } from "@prisma/client";

export const errorFormat = function (errorMessage) {
  const str =
    process.env.NODE_ENV == "production"
      ? " (try refreshing the page and trying again)"
      : errorMessage;
  console.log(str);
  return str;
};

let prisma;

prisma = new PrismaClient({});

// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient({});
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient({
//       log: ["query", "info", `warn`, `error`],
//     });
//   }
//   prisma = global.prisma;
// }
export default prisma;
