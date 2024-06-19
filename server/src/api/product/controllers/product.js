"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const products = await strapi.entityService.findMany(
      "api::product.product",
      {
        ...query,
        populate: {
          photo: {
            populate: "*", // Populate the media data
          },
        },
      }
    );

    // Modify the response to include the URL of the main image
    const modifiedVacancies = products.map((product) => ({
      ...product,
      photoUrl: product.photo?.[0]?.url, // Assuming the first image in the array is the main one
    }));

    ctx.body = modifiedVacancies;
  },
}));
