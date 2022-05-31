class Shifter {
  constructor() {}

  /**
   * Takes a decimal (number based 10) and converts it into a binary
   * @param {Number} base_10
   * @returns {String} Binary Representation of given number
   */
  static toBinary(base_10) {
    // if (!base_10) return null;
    return (base_10 >> 0).toString(2);
  }

  /**
   * Takes a binary number and converts it into a decimal (base 10)
   * @param {Number|String} base_2 Binary number
   * @returns  {String} Base 10 representation of given number
   */
  static toDecimal(base_2) {
    // if (!base_2 && base_2 !== 0) return null;
    return parseInt(base_2, 2).toString(10);
  }

  static show_binary(decimal, bytes = 1, symbol = "0") {
    let base_bits = Shifter.toBinary(decimal);

    while (bytes && base_bits.length < bytes * 4)
      base_bits = `${symbol}${base_bits}`;

    console.log(
      `${base_bits} (${base_bits.length}, ${Math.ceil(base_bits.length / 4)}) ${
        base_bits.length > bytes * 4
          ? ` | ${decimal} <- does not fit in ${bytes * 4} bits, ${bytes} bytes`
          : ""
      }`
    );
  }

  static show_decimal(binary) {
    console.log(parseInt(Shifter.toDecimal(binary), 10));
  }

  binaryCast(decimal) {
    return (decimal >> 0).toString(2);
  }

  decimalCast(binary) {
    return parseInt(binary, 2).toString(10);
  }
}

module.exports = { Shifter };
