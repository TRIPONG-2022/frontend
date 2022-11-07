export const fileToObjectURL = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target!.result as string;
      resolve(result);
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
};

export const base64ToFile = (base64: string, fileName: string): File => {
  const decodedData = window.atob(base64);
  const uint8 = new Uint8Array(
    Array.from(decodedData).map((char) => char.charCodeAt(0)),
  );

  return new File([uint8], fileName);
};
