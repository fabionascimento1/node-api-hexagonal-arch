import { AsyncHandler, FilterRequestDTO } from "../../shared/types";
import { GetUsersRequestDTO, ListUsersResponseDTO } from "./dto";

export type GetUser = (
  handler: AsyncHandler<ListUsersResponseDTO>,
  dto: GetUsersRequestDTO,
  filterDTO: FilterRequestDTO,
) => Promise<void>
