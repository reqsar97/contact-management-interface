import type { AxiosInstance } from 'axios';
import axios from 'axios';

class Api {
  protected readonly axiosInstance: AxiosInstance;

  protected resource: string;

  public constructor(resource: string) {
    const apiUrl = import.meta.env.VITE_API_URL;
    this.resource = resource;
    this.axiosInstance = axios.create({
      baseURL: `${apiUrl}${resource}`,
      maxBodyLength: Number.POSITIVE_INFINITY,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Create a resource
  public async create<T, D>(resource: string, data: D): Promise<T> {
    return this.axiosInstance
      .post<T>(resource, data, {
        headers: {},
      })
      .then((response) => response.data);
  }

  // Read a resource
  public async read<T>(
    resource: string,
    params: Record<string, string | undefined> = {}
  ) {
    return this.axiosInstance.get<T>(resource, {
      params,
    });
  }

  // Update a resource
  public async update<T, D>(resource: string, data: D): Promise<T> {
    return this.axiosInstance
      .put<T>(resource, data)
      .then((response) => response.data);
  }

  public async patch<T, D>(resource: string, data: D) {
    return this.axiosInstance
      .patch<T>(resource, data)
      .then((response) => response.data);
  }

  // Delete a resource
  public async delete<T>(resource: string): Promise<T> {
    return this.axiosInstance
      .delete<T>(resource)
      .then((response) => response.data);
  }

  public async customApiMethod<T>(
    path: string,
    parameters?: Record<string, never>
  ): Promise<T> {
    return this.axiosInstance
      .get<T>(path, { params: parameters })
      .then((response) => response.data);
  }
}

export default Api;
