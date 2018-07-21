import express from "express";
import { Todo } from "../models";

const router = express.Router();

/* GET home page. */
router.post("/list", function(req, res, next) {
  Todo.findAll().then(todos => {
    res.json({ todos });
  });
});

router.post("/add", function(req, res, next) {
  const { title } = req.body;
  Todo.create({ title }).then(() => {
    res.json({ status: "success" });
  });
});

router.post("/delete", function(req, res, next) {
  const { id } = req.body;
  Todo.findOne({ id }).then(todo => {
    todo.destroy();
    res.json({ status: "succes" });
  });
});

export default router;
