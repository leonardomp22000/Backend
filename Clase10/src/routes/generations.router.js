const express = require("express");
const router = express.Router();
const generationsUsecase = require("../usecases/generations.usecase");

router.get("/", async (request, response) => {
  try {
    const generations = await generationsUsecase.getAll();
    response.json({
      success: true,
      message: "All generations",
      data: {
        generations,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const generation = await generationsUsecase.getById(id);
    response.json({
      success: true,
      message: "Generation found",
      data: {
        generation,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

router.post("/", async (request, response) => {
  try {
    const generationCreated = await generationsUsecase.create(request.body);
    response.json({
      success: true,
      data: { generation: generationCreated },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const deletedGenerations = await generationsUsecase.deleteById(id);
    response.json({
      success: true,
      data: {
        generationDeleted: deletedGenerations,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

router.patch("/:id", async (request, response) => {
  try {
    console.log(request.params);
    const { id } = request.params;
    console.log(id);
    const generationUpdated = await generationsUsecase.updateById(
      id,
      request.body
    );
    console.log(request.params);
    response.json({
      success: true,
      data: {
        generationUpdated: generationUpdated,
      },
    });
  } catch (error) {
    response.json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
