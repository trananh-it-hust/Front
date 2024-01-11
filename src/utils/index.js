import { Buffer } from "buffer";

// Hàm mã hóa
const encoded = (e) => {
  return Buffer.from(e).toString("base64");
};
// Giải mã
const decoded = (e) => {
  return Buffer.from(e, "base64").toString("utf-8");
};

export { encoded, decoded };
