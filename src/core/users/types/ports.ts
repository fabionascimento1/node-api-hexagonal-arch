import { FilterRequestDTO } from "core/shared/types";
import { GetUsersRequestDTO, ListUsersResponseDTO } from "./dto";

export interface IHttpClient {
  list(dto: GetUsersRequestDTO, filterDTO: FilterRequestDTO): Promise<ListUsersResponseDTO>
}