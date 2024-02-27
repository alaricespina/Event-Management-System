import java.util.*;

public class MenuHelper {
    ArrayList<String> MenuNames;
    HashMap<String, ArrayList<String>>  MenuPrompts;
    HashMap<String, HashMap<String, Integer>> MenuChoices;

    public MenuHelper() {
        this.MenuNames = new ArrayList<>();
        this.MenuPrompts = new HashMap<>();
        this.MenuChoices = new HashMap<>();
    }

    private void initializeMenu(String menuName) {
        this.MenuNames.add(menuName);
        this.MenuPrompts.put(menuName, new ArrayList<>());
        this.MenuChoices.put(menuName, new HashMap<>());
    }

    public void addMenu(String menuName) {
        if (!this.MenuNames.contains(menuName)){
            this.initializeMenu(menuName);
        } else {
            System.out.println("Warning: " + menuName + " already exists in the list of Menu Names");
        }
    }

    public void addPrompt(String targetMenuName, String newPrompt) {
        if (!this.MenuNames.contains(targetMenuName)) {
            System.out.println("Warning: " + targetMenuName + " Does not exist in the list of Menu Names");
            System.out.println("Creating " + targetMenuName);
            this.initializeMenu(targetMenuName);
        }

        ArrayList<String> currentPrompts = this.MenuPrompts.get(targetMenuName);

        if (currentPrompts.contains(newPrompt)) {
            System.out.println("New Prompt to be added is already in the list of prompts");
            System.out.println("Prompt:" + newPrompt);
        }
        currentPrompts.add(newPrompt);
        this.MenuPrompts.put(targetMenuName, currentPrompts);
    }

    public void addChoice(String targetMenuName, String newChoice) {
        if (!this.MenuNames.contains(targetMenuName)) {
            System.out.println("Warning: " + targetMenuName + " Does not exist in the list of Menu Names");
            System.out.println("Creating " + targetMenuName);
            this.initializeMenu(targetMenuName);
        }

        HashMap<String, Integer> currentChoices = this.MenuChoices.get(targetMenuName);

        if (currentChoices.containsKey(newChoice)) {
            System.out.println("New Choice to be added is already in the list of prompts");
            System.out.println("Choice:" + newChoice);
        } else {
            currentChoices.put(newChoice, currentChoices.size() + 1);
            this.MenuChoices.put(targetMenuName, currentChoices);
        }
        
    }

    public void printMenu(String targetMenuName) {
        if (!this.MenuNames.contains(targetMenuName)){
            System.out.println("Warning: " + targetMenuName + " Does not exist in the list of Menu Names");
        } else {
            ArrayList<String> currentPrompts = this.MenuPrompts.get(targetMenuName);
            HashMap<String, Integer> currentChoices = this.MenuChoices.get(targetMenuName);

            for (String prompt : currentPrompts) {
                System.out.println(prompt);
            }

            HashMap<Integer, String> reverseChoices = new HashMap<>();
            for (Map.Entry<String, Integer> entry : currentChoices.entrySet()) {
                reverseChoices.put(entry.getValue(), entry.getKey());
            }

            for (Map.Entry<Integer, String> entry : reverseChoices.entrySet() ) {
                System.out.printf("[%d] - %s", entry.getKey(), entry.getValue());
                System.out.println();
            }
        }
    }

    public int pollMenu(String targetMenuName, int targetAnswer) {
        if (!this.MenuNames.contains(targetMenuName)) {
            return -1;
        }

        HashMap<String, Integer> currentChoices = this.MenuChoices.get(targetMenuName);
        HashMap<Integer, String> reverseChoices = new HashMap<>();

        for (Map.Entry<String, Integer> entry : currentChoices.entrySet()) {
            reverseChoices.put(entry.getValue(), entry.getKey());
        }

        if (!reverseChoices.containsKey(targetAnswer)) {
            return -1;
        }

        return targetAnswer;
    }

}
