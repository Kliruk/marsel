/* eslint-disable max-len */
export const customLazyLoading = (width : number, height : number) => {
  const shimmer = (w: number, h: number) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect id="r" width="${w}" height="${h}" fill="#F8F8F8">
      <animate id="anim1" xlink:href="#r" attributeName="opacity" from="1" to="0" dur="1s" begin="0s;anim2.end"  />
      <animate id="anim2" xlink:href="#r" attributeName="opacity" from="0" to="1" dur="1s" begin="anim1.end"  />
    </rect>
  </svg>`;


  const toBase64 = (str: string) =>
    typeof window === "undefined" ?
      Buffer.from(str).toString("base64") :
      window.btoa(str);

  return `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`;
};
