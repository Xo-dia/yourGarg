package co.simplon.yourgardenbusiness.dtos;

public record AccountAuthenticate(String username, String password) {
    @Override
    public String toString() {
	return "{username=" + username + ", password=[PROTECTED]}";
    }
}
