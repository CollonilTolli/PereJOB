"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::partner.partner", ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const partners = await strapi.entityService.findMany(
      "api::partner.partner",
      {
        ...query,
        populate: {
          LogoType: {
            populate: "*", // Populate the media data
          },
        },
      }
    );

    // Modify the response to include the URL of the main image
    const modifiedVacancies = partners.map((partner) => ({
      ...partner,
      photoUrl: partner.LogoType?.[0]?.url, // Assuming the first image in the array is the main one
    }));

    ctx.body = modifiedVacancies;
  },
}));
