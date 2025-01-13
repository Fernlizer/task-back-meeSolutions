import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  // สร้าง Task
  async createTask(data: Prisma.TaskCreateInput) {
    return this.prisma.task.create({ data });
  }

  // ดึง Tasks ทั้งหมด
  async getTasks() {
    return this.prisma.task.findMany();
  }

  // ดึง Tasks ตามสถานะ
  async getTasksByStatus(status: string) {
    return this.prisma.task.findMany({ where: { status } });
  }

  // อัปเดต Task
  async updateTask(id: number, data: Prisma.TaskUpdateInput) {
    return this.prisma.task.update({
      where: { id },
      data,
    });
  }

  // ลบ Task
  async deleteTask(id: number) {
    return this.prisma.task.delete({ where: { id } });
  }
}
