from sklearn.ensemble import RandomForestClassifier, VotingClassifier, GradientBoostingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report
import matplotlib.pyplot as plt
import seaborn as sns


def train_ensemble(X_train, y_train):
    log_clf = LogisticRegression(class_weight="balanced", max_iter=1000)
    rf_clf = RandomForestClassifier(n_estimators=100, random_state=42)
    gb_clf = GradientBoostingClassifier(n_estimators=100, learning_rate=0.1, random_state=42)

    ensemble = VotingClassifier(estimators=[
        ('lr', log_clf),
        ('rf', rf_clf),
        ('gb', gb_clf)
    ], voting='soft')

    ensemble.fit(X_train, y_train)
    return ensemble


def get_model_metrics(model, X_test, y_test):
    y_pred = model.predict(X_test)

    accuracy = accuracy_score(y_test, y_pred)
    print(f"Ensemble Model Accuracy: {accuracy:.2f}")

    print("\nClassification Report:")
    print(classification_report(y_test, y_pred))

    cm = confusion_matrix(y_test, y_pred)
    plt.figure(figsize=(5,4))
    sns.heatmap(cm, annot=True, fmt='d', cmap='Purples', xticklabels=["Sell", "Buy"], yticklabels=["Sell", "Buy"])
    plt.xlabel("Predicted")
    plt.ylabel("Actual")
    plt.title("Confusion Matrix - Ensemble")
    plt.show()

    return y_pred
