"use strict";

/*
 * vacancy controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::vacancy.vacancy", ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const vacancies = await strapi.entityService.findMany(
      "api::vacancy.vacancy",
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
    const modifiedVacancies = vacancies.map((vacancy) => ({
      ...vacancy,
      photoUrl: vacancy.photo?.[0]?.url, // Assuming the first image in the array is the main one
    }));

    ctx.body = modifiedVacancies;
  },
}));
