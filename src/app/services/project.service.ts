// project.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/projects.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl = 'https://taskflowapp.azurewebsites.net/projects'; // Adjust as per your backend URL

  constructor(private http: HttpClient) { }

  getUserProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/userProjects`, {
      withCredentials: true
    });
  }

  getAssignedProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/assignedProjects`, {
      withCredentials: true
    });
  }

  // project.service.ts
    getUserProjectMembers(projectId: string): Observable<User[]> {
        return this.http.get<User[]>(`${this.baseUrl}/${projectId}/members`, {
        withCredentials: true
        });
    }

    getOverdueTasks(projectId: string): Observable<Task[]> {
        return this.http.get<Task[]>(`${this.baseUrl}/${projectId}/overdue-tasks`);
      }

      getProjectById(projectId: string): Observable<Project> {
        return this.http.get<Project>(`${this.baseUrl}/get/${projectId}`, {
          withCredentials: true
        });
      }
      
      deleteProject(projectId: string): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/delete/${projectId}`, {
          withCredentials: true
        });
      }

      updateProject(project: Project): Observable<any> {
        return this.http.put(`${this.baseUrl}/update/${project.id}`, project, {
          withCredentials: true
       });
      }

      // In your project.service.ts
      getTasksForUserProjectDueToday(userId: string, projectId: string): Observable<Task[]> {
        return this.http.get<Task[]>(`${this.baseUrl}/tasks/user/${userId}/project/${projectId}/dueToday`);
      }

      deleteUserFromProject(projectId: string, userId: string): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${projectId}/deleteUser/${userId}`, {
          withCredentials: true
        });

      
    }

}

