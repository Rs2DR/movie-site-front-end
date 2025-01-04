import axios from 'axios';

export class ApiError {
	public static check(error: unknown): { error: string } {
		if (axios.isAxiosError(error)) {
			return { error: error.message };
		} else if (error instanceof Error) {
			return { error: error.message };
		}
		return { error: 'Unknown error' };
	}
}
