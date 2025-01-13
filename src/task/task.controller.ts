import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  // เพิ่ม Task
  @Post()
  async createTask(@Body() taskData: { title: string; description: string; dueDate: string; status: string }) {
    return this.taskService.createTask(taskData);
  }

  // ดึง Tasks ทั้งหมด
  @Get()
  async getTasks() {
    return this.taskService.getTasks();
  }

  // ดึง Tasks ตามสถานะ
  @Get('status/:status')
  async getTasksByStatus(@Param('status') status: string) {
    return this.taskService.getTasksByStatus(status);
  }

  // อัปเดต Task
  @Patch(':id')
  async updateTask(@Param('id') id: number, @Body() taskData: { title?: string; description?: string; status?: string }) {
    return this.taskService.updateTask(Number(id), taskData);
  }

  // ลบ Task
  @Delete(':id')
  async deleteTask(@Param('id') id: number) {
    return this.taskService.deleteTask(Number(id));
  }
}
