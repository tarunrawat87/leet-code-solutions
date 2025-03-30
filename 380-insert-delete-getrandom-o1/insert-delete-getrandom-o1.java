import java.util.*;

class Item {
    int index;
    int value;
    Item(int index,int value){
        this.index = index;
        this.value = value;
    }
    public String toString(){
        return "index="+index+"&value="+value;
    }
}

class RandomizedSet {

    private ArrayList<Item> indexLst;
    private HashMap<Integer, Integer> map;

    public RandomizedSet() {
        indexLst = new ArrayList<Item>();
        map = new HashMap<>();
    }

    public boolean insert(int val) {

        if(map.containsKey(val)){
            return false;
        }

        this.map.put(val,indexLst.size());
        this.indexLst.add(new Item (indexLst.size(),val));
       // System.out.println("Insert ..");
       // System.out.println(this.indexLst);
       // System.out.println("***********");
        return true;
    }

    public boolean remove(int val) {
        
        if(!map.containsKey(val)){
            return false;
        }
        if(this.indexLst.size() == 1) {
            this.map.remove(val);
            this.indexLst.remove(0);
            return true;
        }
        int lastIndex = this.indexLst.size()-1;
        int indexOfEle = map.get(val);
        
        Item item = this.indexLst.get(lastIndex); 
        item.index = indexOfEle;
        this.map.put(item.value, indexOfEle);
        // copying the value
        this.indexLst.set(indexOfEle, this.indexLst.get(lastIndex));
        this.indexLst.remove(lastIndex);
        this.map.remove(val);
        
       // System.out.println("after remove");
       // System.out.println(this.indexLst);
       // System.out.println("***");
        return true;

    }

    public int getRandom() {
       // System.out.println(this.map);
       // System.out.println(this.indexLst);   
       // System.out.println("*******");
        int outBound = this.indexLst.size();
        int randomValue = new Random().nextInt(0, outBound);
        Item item = this.indexLst.get(randomValue);
        return item.value;
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet obj = new RandomizedSet();
 * boolean param_1 = obj.insert(val);
 * boolean param_2 = obj.remove(val);
 * int param_3 = obj.getRandom();
 */