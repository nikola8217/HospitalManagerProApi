import { Request, Response, NextFunction } from "express";
import { SpecializationService } from "../services/specialization.service";
import { SpecializationRepository } from "../repositories/specialization.repository";

export class SpecializationController {
    static async createSpecialization(req: Request, res: Response, next: NextFunction) {
        try {
            const specialization = await SpecializationService.createSpecialization(req);

            res.status(201).json(specialization);
        } catch (error) {
            next(error);
        }
    }

    static async getSpecializations(req: Request, res: Response) {
        const specializations = await SpecializationRepository.getAllSpecialization();

        res.status(200).json(specializations);
    }

    static async getSingleSpecialization(req: Request, res: Response, next: NextFunction) {
        try {
            const doctor = await SpecializationService.findSpecializationByID(req);

            res.status(200).json(doctor);
        } catch (error) {
            next(error);
        }
    }

    static async updateSpecialization(req: Request, res: Response, next: NextFunction) {
        try {
            const specialization = await SpecializationService.updateSpecialization(req);

            res.status(200).json(specialization);
        } catch (error) {
            next(error);
        }
    }

    static async deleteSpecialization(req: Request, res: Response, next: NextFunction) {
        try {
            await SpecializationService.deleteSpecialization(req);
            
            res.status(200).json({msg: 'Specialization is deleted'});
        } catch (error) {
            next(error);
        }
    }
}